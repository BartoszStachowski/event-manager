import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import camelCase from 'lodash.camelcase';
import upperFirst from 'lodash.upperfirst';
import 'nprogress/nprogress.css';
import Vuelidate from 'vuelidate/src';
import DateFilter from './filters/date';

Vue.filter('date', DateFilter);

Vue.use(Vuelidate);
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
