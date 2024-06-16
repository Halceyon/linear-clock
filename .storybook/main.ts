import type { StorybookConfig } from '@storybook/vue3-vite';

import { dirname, join } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('storybook-dark-mode')
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      // docgen: {
      //   plugin: 'vue-component-meta',
      //   tsconfig: 'tsconfig.app.json'
      // }
    }
  }
};
export default config;
