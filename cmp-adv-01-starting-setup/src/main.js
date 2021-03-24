import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';

const app = createApp(App);

//Components registered globally
app.component('base-badge', BaseBadge);
// app.component('badge-list', BadgeList);
// app.component('user-info', UserInfo);

app.mount('#app');
