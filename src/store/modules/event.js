import EventService from '@/services/EventService';

export const namespaced = true;

export const state = {
  events: [],
  eventsTotal: 0,
  event: {},
};

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENT(state, event) {
    state.event = event;
  },
};

export const actions = {
  fetchEvents({ commit, dispatch }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then(res => {
        commit('SET_EVENTS', res.data);
      })
      .catch(err => {
        console.log('There was a problem fetching events: ' + err.message);
      });
  },
  fetchEvent({ commit, getters, dispatch }, id) {
    let event = getters.getEventById(id);

    if (event) {
      commit('SET_EVENT', event);
    } else {
      EventService.getEvent(id)
        .then(res => {
          commit('SET_EVENT', res.data);
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  },
};

export const getters = {
  getEventById: state => id => {
    return state.events.find(event => event.id === id);
  },
};
