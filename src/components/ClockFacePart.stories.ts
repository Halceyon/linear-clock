import type { Meta, StoryObj } from '@storybook/vue3';
import ClockFacePart from './ClockFacePart.vue';

const meta = {
  title: 'Components/Clock Face Part',
  component: ClockFacePart
} as Meta<typeof ClockFacePart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Morning: Story = {};
