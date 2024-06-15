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
import type { SelectedItemBus } from '@/types';
import { useEventBus, useMagicKeys } from '@vueuse/core';
import { onMounted, ref, watch } from 'vue';

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

  const selectedItemBusValue = value as SelectedItemBus;
  if (selectedItemBusValue) {
    const bus = useEventBus(selectedItemBusValue.busName);
    bus.emit(selectedItemBusValue.value);
  }
}
const suggestions = ref([] as SelectedItemBus[]);
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
    </CommandList>
  </CommandDialog>
</template>
<style scoped></style>
