import type { Meta, StoryObj } from '@storybook/vue3';
// import { fn } from '@storybook/test';
import { Input } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    modelValue: { control: 'text' }
  },
  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // onClick: fn(),
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    modelValue: 'Example input value'
  }
};
