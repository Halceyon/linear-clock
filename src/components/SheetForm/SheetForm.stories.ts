import { formSchema } from '@/modules/Projects/schema.js';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/vue3';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form';
import { Input } from '../ui/input';

import SheetForm from './SheetForm.vue';

const meta: Meta<typeof SheetForm> = {
  title: 'Components/SheetForm',
  component: SheetForm,
  argTypes: {
    showFullscreen: { control: 'boolean' },
    data: { control: 'object' },
    variant: {
      control: 'select',
      options: ['create', 'update']
    },
    size: {
      control: 'select',
      options: ['sm', 'lg', 'default', 'icon']
    },
    formSchema: { control: 'object' },
    title: { control: 'text' },
    description: { control: 'text' },
    onSubmit: { action: 'submit' }
  },
  args: {
    showFullscreen: true,
    data: {},
    variant: 'create',
    formSchema: formSchema,
    title: 'Project',
    description: 'This is the name of the project'
  },
  render: (args: any) => ({
    components: {
      SheetForm,
      FormControl,
      FormDescription,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
      Input
    },
    setup() {
      return {
        ...{ args },
        onSubmit: (data: any) => {
          action('submit')(data);
        }
      };
    },
    template: `
      <SheetForm \
        :form-schema="args.formSchema" \
        :variant="args.variant" \
        :title="args.title" \
        :description="args.description" \
        :data="args.data" \
        :show-fullscreen="args.showFullscreen" \
        :fullscreen="args.fullscreen" \
        :size="args.size" \
        :loading="args.loading" \
        @submit="onSubmit" \
      > \
          <template v-slot="{ isFullscreen }"> \
            <FormField v-slot="{ componentField }" name="name"> \
              <FormItem> \
                <FormLabel>Name</FormLabel> \
                <FormControl> \
                  <Input type="text" placeholder="e.g. My Project" v-bind="componentField" /> \
                </FormControl> \
                <FormDescription> This is the name of the project. </FormDescription> \
                <FormMessage /> \
              </FormItem> \
            </FormField> \
            <FormField v-if="isFullscreen" v-slot="{ componentField }" name="description"> \
              <FormItem> \
                <FormLabel>Description</FormLabel> \
                <FormControl> \
                  <Input v-bind="componentField" /> \
                </FormControl> \
                <FormDescription> Describe the project in more detail. </FormDescription> \
                <FormMessage /> \
              </FormItem> \
            </FormField> \
          </template> \
      </SheetForm>`
  })
} satisfies Meta<typeof SheetForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFormData: Story = {
  args: {
    showFullscreen: true,
    data: {
      name: 'abc',
      description: 'This is a test project'
    }
  }
} satisfies Meta<typeof SheetForm>;

export const WithInvalidFormData: Story = {
  args: {
    showFullscreen: true,
    data: {
      name: 'a'
    }
  }
} satisfies Meta<typeof SheetForm>;

export const Icon: Story = {
  args: {
    size: 'icon',
    buttonVariant: 'link'
  }
};

export const Fullscreen: Story = {
  args: {
    showFullscreen: true,
    fullscreen: true
  }
};

export const CreateLoading: Story = {
  args: {
    loading: true
  }
};

export const UpdateLoading: Story = {
  args: {
    variant: 'update',
    loading: true
  }
};

export const IconLoading: Story = {
  args: {
    variant: 'update',
    size: 'icon',
    loading: true
  }
};
