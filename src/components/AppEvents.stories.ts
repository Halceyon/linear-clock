import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/vue3';
import { useEventBus } from '@vueuse/core';
import AppEvents from './AppEvents.vue';
import type { NotificationMessage } from '@/types';
import { Button } from './ui/button';

const notificationBus = useEventBus('app:notification');

// Story configuration
const meta = {
  title: 'Components/AppEvents',
  component: AppEvents
} as Meta<typeof AppEvents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Notifications: Story = {
  render: () => ({
    components: { AppEvents, Button },
    template: `
              <AppEvents /> \
              <div class="flex flex-col container"> \
                <Button @click="simulateInfoNotification" class="mb-5" type="button">Simulate Information Notification</Button> \
                <Button @click="simulateSuccessNotification" class="mb-5" type="button">Simulate Success Notification</Button> \
                <Button @click="simulateErrorNotification" type="button">Simulate Error Notification</Button> \
              </div>
            `,
    setup() {
      return {
        simulateInfoNotification() {
          notificationBus.emit('app:notification', {
            message: 'Info! received!',
            type: 'info'
          } as NotificationMessage);
        },
        simulateSuccessNotification() {
          notificationBus.emit('app:notification', {
            message: 'Notification received!',
            description: 'This is an information notification.',
            type: 'success',
            action: {
              label: 'Undo',
              onClick: (event: MouseEvent) => {
                action('notification-action-clicked')(event);
              }
            }
          } as NotificationMessage);
        },
        simulateErrorNotification() {
          notificationBus.emit('app:notification', {
            message: 'Error occurred!',
            description: 'This is an error notification.',
            type: 'error'
          } as NotificationMessage);
        }
      };
    }
  })
};
