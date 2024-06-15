import type { Meta, StoryObj } from '@storybook/vue3';
import { Button } from '.';
import { RefreshCcw } from 'lucide-vue-next';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: { control: 'select', options: ['default', 'sm', 'lg', 'icon'] },
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
    }
  },
  args: {
    size: 'default',
    variant: 'default',
    loading: false,
    class: ''
  },
  parameters: {
    docs: {
      description: {
        component: 'A button component'
      }
    }
  },
  render: (args: any) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template:
      '<Button :size="args.size" :variant="args.variant" :loading="args.loading" :class="args.class">Click Me!</Button>'
  })
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'default',
    variant: 'default'
  }
};
export const Loading: Story = {
  args: {
    size: 'default',
    variant: 'default',
    loading: true
  }
};
export const Small: Story = {
  args: {
    size: 'sm',
    variant: 'default'
  }
};

export const Icon: Story = {
  args: {
    size: 'icon',
    variant: 'outline'
  },
  parameters: {
    docs: {
      description: {
        story: 'A button with an icon'
      }
    }
  },
  render: (args: any) => ({
    components: { Button, RefreshCcw },
    setup() {
      return { args };
    },
    template: '<Button :size="args.size" :variant="args.variant"><RefreshCcw /></Button>'
  })
};

export const IconLoading: Story = {
  args: {
    size: 'icon',
    variant: 'outline',
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'A button with an icon in the loading state'
      }
    }
  },
  render: (args: any) => ({
    components: { Button, RefreshCcw },
    setup() {
      return { args };
    },
    template:
      '<Button :size="args.size" :variant="args.variant" :loading="args.loading"><RefreshCcw v-if="!args.loading" /></Button>'
  })
};
