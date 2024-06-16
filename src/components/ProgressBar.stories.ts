import type { Meta, StoryObj } from '@storybook/vue3';
import ProgressBar from './ProgressBar.vue';

const meta = {
  title: 'Components/Progress Bar',
  component: ProgressBar,
  args: {
    current: 50
  },
  argTypes: {
    current: {
      control: {
        type: 'number'
      }
    }
  },
  decorators: [() => ({ template: '<div style="width: 50vw"><story/></div>' })]
} as Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
