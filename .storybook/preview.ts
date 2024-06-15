import { setConsoleOptions } from '@storybook/addon-console';
import { DEFAULT_VIEWPORT, INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addons } from '@storybook/preview-api';
import { setup, type Preview } from '@storybook/vue3';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { createPinia } from 'pinia';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import i18nPreview from 'storybook-i18n/preview';
import { type App } from 'vue';
import i18n from '../src/i18n';
// import router from './mocks/MockRouter';
import { updateDarkMode } from './helpers/dark-mode';

import '../src/assets/index.css';

initialize({
  onUnhandledRequest(req) {
    if (req.url.startsWith('http://localhost:5173')) {
      console.error('Found an unhandled request:', req);
    }
    return false;
  }
});
setConsoleOptions({});

const pinia = createPinia();

// get channel to listen to event emitter
const channel = addons.getChannel();

channel.on(DARK_MODE_EVENT_NAME, (e) => {
  updateDarkMode(window, e);
});

addons.getChannel().on('LOCALE_CHANGED', (newLocale) => {
  console.log('LOCALE_CHANGED', newLocale);
  i18n.global.locale.value = newLocale;
});

setup((app: App) => {
  // install plugins
  app.use(pinia);
  app.use(logger);
  app.use(i18n);

  // setup provides
  const { t } = i18n.global;
  app.provide('t', t);
});

const preview: Preview = {
  ...i18nPreview,
  ...addons,
  globals: {
    locale: 'en',
    locales: {
      en: { title: 'English', right: 'GB' },
      af: { title: 'Afrikaans', right: 'ZA' }
    }
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    darkMode: {
      dark: {},
      light: {}
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS
      },
      defaultViewport: DEFAULT_VIEWPORT,
      styles: {
        height: '100%',
        width: '100%'
      }
    }
  },
  loaders: [mswLoader]
};

export default preview;
