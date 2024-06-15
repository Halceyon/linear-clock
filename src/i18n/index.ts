import { createI18n } from 'vue-i18n';
import af from './locales/af.json';
import en from './locales/en.json';

const messages = {
  af,
  en
};

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'en', // set default locale
  fallbackLocale: 'en', // set fallback locale
  messages
});

export default i18n;
