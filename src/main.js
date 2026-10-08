import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import vuetify from '@/plugins/vuetify';

import '@fontsource/barlow/400.css';
import '@fontsource/barlow/500.css';
import '@fontsource/barlow-condensed/600.css';
import '@fontsource/barlow-condensed/700.css';

import '@/styles/main.scss';

createApp(App).use(router).use(vuetify).mount('#app');