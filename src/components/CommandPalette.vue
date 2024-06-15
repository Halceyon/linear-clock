<script lang="ts" setup>
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/components/ui/command';
import type { SelectedItemBus, SelectedItemRoute } from '@/types';
import { useEventBus, useMagicKeys } from '@vueuse/core';
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const open = ref(false);

const commandPaletteBus = useEventBus('app:command-palette');

const { Meta_O, Ctrl_O } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'o' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
    }
  }
});

watch([Meta_O, Ctrl_O], (v) => {
  if (v[0] || v[1]) {
    onOpenChange();
  }
});

function onOpenChange() {
  open.value = !open.value;
}

function onCommandSelected(selectedValue: any) {
  const { value } = selectedValue.detail;

  const routerSelectedItemValue = value as SelectedItemRoute;
  if (routerSelectedItemValue) {
    router.push({ name: routerSelectedItemValue.pathName });
    open.value = false;
  }

  const selectedItemBusValue = value as SelectedItemBus;
  if (selectedItemBusValue) {
    const bus = useEventBus(selectedItemBusValue.busName);
    bus.emit(selectedItemBusValue.value);
  }
}

const suggestions = [
  { value: 'projects', label: 'Projects', pathName: 'ProjectHome' }
] as SelectedItemRoute[];

const actions = [{ value: 'logout', label: 'Logout', busName: 'app:auth' }] as SelectedItemBus[];

onMounted(() => {
  commandPaletteBus.on(() => {
    open.value = true;
  });
});
</script>
<template>
  <CommandDialog v-model:open="open">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem
          v-for="item in suggestions"
          :key="item.value"
          :value="item"
          @select="onCommandSelected"
        >
          {{ item.label }}
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Actions">
        <CommandItem
          v-for="item in actions"
          :key="item.value"
          :value="item"
          @select="onCommandSelected"
        >
          {{ item.label }}
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
</template>
<style scoped></style>
