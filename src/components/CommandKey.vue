<template>
  <kbd
    class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[12px] font-medium text-muted-foreground opacity-100"
  >
    <img
      v-if="os === 'Windows'"
      class="mr-2"
      src="../assets/windows-key.svg"
      width="11"
      color="pink"
    />
    <span v-else class="mr-2">⌘</span>
    <span v-for="(keyboardKey, index) in props.keys" :key="index">+ {{ keyboardKey }}</span>
  </kbd>
</template>

<script setup lang="ts">
import { useOperatingSystem } from '@/use';

const os = useOperatingSystem();

const props = defineProps({
  keys: Array
});
</script>
