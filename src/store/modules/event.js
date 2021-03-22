import EventService from '@/services/EventService';

export const namespaced = true;

export const state = {
  events: [],
  eventsTotal: 0,
  event: {},
};

export const mutations = {
  SET_EVENTS(state, event) {
    state.events.push(event);
  },
};

export const actions = {
  fetchEvents({ commit, dispatch }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then((res) => {
        commit('SET_EVENTS', res.data);
      })
      .catch((err) => {
        console.log('There was a problem fetching events: ' + err.message);
      });
  },
};
