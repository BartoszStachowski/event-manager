import Vue from 'vue';
import Vuex from 'vuex';
import * as event from './modules/event';
import * as user from './modules/user';
import * as notification from './modules/notification';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    event,
    user,
    notification,
  },
  state: {
    categories: ['job', 'education', 'fun', 'food', 'sport', 'nature'],
  },
});
