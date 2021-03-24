import Vue from 'vue';
import Vuex from 'vuex';
import * as event from './modules/event';
import * as user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    event,
    user,
  },
  state: {
    categories: ['job', 'education', 'fun', 'food', 'sport', 'nature'],
  },
});
