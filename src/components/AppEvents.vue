<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner';
import type { NotificationMessage } from '@/types';
import { useEventBus } from '@vueuse/core';
import { onMounted, onUnmounted } from 'vue';
import { toast } from 'vue-sonner';

const notificationBus = useEventBus('app:notification');

const props = defineProps({
  duration: {
    type: Number,
    default: 10000
  }
});
onUnmounted(() => {
  // unsubscribe from events
  notificationBus.off((event, notification: NotificationMessage) => {});
});
onMounted(() => {  // subscribe to notification events
  notificationBus.on((event, notification: NotificationMessage) => {
    let message = notification.message;
    let description = notification.description;
    let closeButton = true;
    if (!notification.description) {
      message = 'Linear Clock';
      description = notification.message;
    }
    switch (notification.type) {
      case 'success':
        toast.success(message, {
          description,
          duration: props.duration
        });
        break;
      case 'error':
        toast.error(message, {
          description,
          closeButton
        });
        break;
      default:
        toast.info(message, {
          description,
          duration: props.duration,
        });
        break;
    }
  });
});
</script>
<template>
  <Toaster position="top-center" />
</template>
