<script setup lang="ts">
/**
 * This component represents a form displayed in a sheet.
 * It handles form submission and provides a title, description, and variant options.
 *
 * @component SheetForm
 * @props {TypedSchema} formSchema - The schema used for form validation.
 * @props {string} title - The title of the form.
 * @props {string} description - The description of the form.
 * @props {boolean} showFullscreen - Whether to show the fullscreen button.
 * @props {boolean} fullscreen - Whether the form is in fullscreen mode.
 * @props {any} data - The initial data for the form.
 * @props {('create' | 'update')} variant - The variant of the form (create or update).
 * @emits submit - Event emitted when the form is submitted.
 */
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  // SheetClose,
  SheetTrigger
} from '@/components/ui/sheet';
import { Fullscreen, Minimize, Pencil, Plus } from 'lucide-vue-next';
import { inject, ref, watch } from 'vue';
import { cn } from '@/lib/utils';

import { useForm, type TypedSchema } from 'vee-validate';
import Tooltip from '../ui/tooltip/Tooltip.vue';
import TooltipContent from '../ui/tooltip/TooltipContent.vue';
import TooltipProvider from '../ui/tooltip/TooltipProvider.vue';
import TooltipTrigger from '../ui/tooltip/TooltipTrigger.vue';


interface SheetFormProps {
  formSchema: TypedSchema;
  title: string;
  name?: string;
  description: string;
  data?: any;
  size?: 'sm' | 'lg' | 'default' | 'icon';
  variant?: 'create' | 'update' | 'default';
  buttonVariant?:
    | 'default'
    | 'secondary'
    | 'ghost'
    | 'outline'
    | 'link'
    | 'destructive'
    | null
    | undefined;
  showFullscreen?: boolean;
  fullscreen?: boolean;
  loading?: boolean;
}

const props = defineProps<SheetFormProps>();

const t = inject('t') as Function;

const buttonSize = ref(props.size ?? 'sm');

const emit = defineEmits(['submit']);

const form = useForm({
  validationSchema: props.formSchema,
  initialValues: props.data
});

const open = ref(false);

const isFullscreen = ref(props.fullscreen ?? false);

const { handleSubmit } = form;

const onSubmit = handleSubmit(async (values) => {
  emit('submit', values);
  open.value = false;
});

watch(open, (value) => {
  if (value) {
    if (props.variant === 'update' || props.variant === 'default') {
      form.setValues(props.data);
    } else {
      form.resetForm();
    }
  }
});
</script>

<template>
  <div :class="cn('', $attrs.class ?? '')" data-cy="sheet-form">
    <Sheet v-model:open="open">
      <SheetTrigger as-child>
        <slot name="trigger" :open="open">
          <Button
            :size="buttonSize"
            :variant="buttonVariant ?? 'default'"
            :loading="loading"
            :icon="variant === 'create' ? Plus : Pencil"
            @click="open = true"
            :data-cy="`sheet-form-trigger-${variant}`"
          >
            {{ variant === 'create' ? t('common.create') : t('common.edit') }}
          </Button>
        </slot>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        :class="{ 'h-screen': isFullscreen }"
        data-cy="sheet-form-content"
      >
        <template #buttons v-if="showFullscreen">
          <TooltipProvider>
            <Tooltip :delay-duration="0">
              <TooltipTrigger as-child>
                <Button
                  class="h-6 w-6 mr-1 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
                  variant="ghost"
                  size="icon"
                  @click="isFullscreen = !isFullscreen"
                >
                  <Minimize v-if="isFullscreen" class="w-4 h-4 text-muted-foreground" />
                  <Fullscreen v-else class="w-4 h-4 text-muted-foreground" />
                </Button>
              </TooltipTrigger>
              <TooltipContent :side="isFullscreen ? 'bottom' : 'top'">
                {{ isFullscreen ? t('common.minimize') : t('common.fullscreen') }}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </template>

        <form @submit="onSubmit" data-cy="form">
          <SheetHeader>
            <SheetTitle>{{ title }}</SheetTitle>
            <SheetDescription>{{ description }}</SheetDescription>
          </SheetHeader>
          <div class="grid gap-4 py-4">
            <slot :is-fullscreen="isFullscreen" />
          </div>
          <SheetFooter>
            <SheetClose>
              <Button type="button" variant="ghost" @click="open = false">
                {{ t('common.cancel') }}
              </Button>
            </SheetClose>
            <Button type="submit"> {{ t('common.save') }} </Button>
          </SheetFooter>
          <FormValidationSummary :errors="form.errors.value" class="mt-4" />
        </form>
      </SheetContent>
    </Sheet>
  </div>
</template>
