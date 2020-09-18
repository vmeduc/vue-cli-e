import Vue from 'vue';
import VueMaterial from './vue-material';
import 'vue-material/dist/vue-material.min.css';

import store from '@/store';
import App from './App.vue';

Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
