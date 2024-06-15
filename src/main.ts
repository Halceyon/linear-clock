import { piniaInstance } from '@/global';
import i18n from '@/i18n';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/index.css';

const app = createApp(App);

// Add the pinia plugin to the app
app.use(piniaInstance);

// Add the i18n plugin to the app
app.use(i18n);

// Mount the app to the DOM
app.mount('#app');
