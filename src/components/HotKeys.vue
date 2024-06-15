<script setup lang="ts">
import { useEventBus, useMagicKeys } from '@vueuse/core';

const authEventBus = useEventBus('app:auth');

useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'l' && (e.metaKey || e.ctrlKey)) {
      authEventBus.emit('logout');
      e.preventDefault();
    }
  }
});
</script>
<template>
  <div />
</template>
