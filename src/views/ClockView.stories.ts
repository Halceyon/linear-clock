import type { Meta, StoryObj } from '@storybook/vue3';
import ClockView from './ClockView.vue';

const meta = {
  title: 'Views/Clock View',
  component: ClockView
} as Meta<typeof ClockView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
