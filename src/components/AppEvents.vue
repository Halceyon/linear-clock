<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner';
import { useAuthStore, useOrgStore } from '@/stores';
import { useEventBus } from '@vueuse/core';
import { inject, onMounted, onUnmounted } from 'vue';
import { toast } from 'vue-sonner';

const logger = useLogger();

const authStore = useAuthStore();
const orgStore = useOrgStore();

const authEventBus = useEventBus('app:auth');
const notificationBus = useEventBus('app:notification');

const props = defineProps({
  duration: {
    type: Number,
    default: 10000
  }
});
onUnmounted(() => {
  // unsubscribe from events
  authEventBus.off((event) => {
    logger.debug('Auth off:', event);
  });
  notificationBus.off((event) => {
    logger.debug('Notification off:', event);
  });
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
    let action = notification.action;
    if (!action) {
      action = {
        label: 'Dismiss',
        onClick: () => {}
      };
      closeButton = false;
    }
    switch (notification.type) {
      case 'success':
        logger.debug('Success notification:', notification);
        toast.success(message, {
          description,
          duration: props.duration,
          action,
          closeButton
        });
        break;
      case 'error':
        logger.error('Error notification:', notification);
        toast.error(message, {
          description,
          duration: props.duration,
          action,
          closeButton
        });
        break;
      default:
        logger.info('Info notification:', notification);
        toast.info(message, {
          description,
          duration: props.duration,
          action,
          closeButton
        });
        break;
    }
  });
});
</script>
<template>
  <Toaster position="top-center" />
</template>
