<template>
  <div>
    <h1>Event for userName</h1>
    <div v-for="event in event.events" :key="event.id">{{ event }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'EventList',
  created() {
    this.$store.dispatch('event/fetchEvents', {
      perPage: 2,
      page: this.page,
    });
  },
  computed: {
    ...mapState(['event']),
  },
};
</script>
