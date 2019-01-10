// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/main.css';
import util from './util/util';
import server from './service/index';
import * as allFilters from './util/filter';
Vue.prototype.$http = server;
Object.keys(allFilters).forEach(key => {
  Vue.filter(key, allFilters[key]);
});

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(util);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
