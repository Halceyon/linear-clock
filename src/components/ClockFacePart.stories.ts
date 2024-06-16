import type { Meta, StoryObj } from '@storybook/vue3';
import ClockFacePart from './ClockFacePart.vue';
import { ar } from 'date-fns/locale';

const meta = {
  title: 'Components/Clock Face Part',
  component: ClockFacePart,
  argTypes: {
    start: {
      control: {
        type: 'number'
      }
    },
    end: {
      control: {
        type: 'number'
      }
    }
  },
  args: {
    start: 6,
    end: 11
  }
} as Meta<typeof ClockFacePart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Morning: Story = {};

export const Afternoon: Story = {
  args: {
    start: 12,
    end: 17
  }
};

export const Evening: Story = {
  args: {
    start: 17,
    end: 22
  }
};
