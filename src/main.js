import { createApp, defineAsyncComponent } from 'vue';

import router from './router';
import App from './App.vue';
import store from './store/index';

const BaseCard = defineAsyncComponent(() => import('./components/ui/BaseCard'));
const BaseButton = defineAsyncComponent(() =>
  import('./components/ui/BaseButton')
);
const BaseBadge = defineAsyncComponent(() =>
  import('./components/ui/BaseBadge')
);
const BaseSpinner = defineAsyncComponent(() =>
  import('./components/ui/BaseSpinner')
);
const BaseDialog = defineAsyncComponent(() =>
  import('./components/ui/BaseDialog')
);

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.mount('#app');
