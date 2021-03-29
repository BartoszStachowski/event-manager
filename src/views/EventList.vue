<template>
  <div>
    <h1>Event for userName</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import EventCard from '@/components/EventCard.vue';

export default {
  name: 'EventList',
  components: { EventCard },
  created() {
    this.$store.dispatch('event/fetchEvents', {
      perPage: 4,
      page: this.page,
    });
  },
  computed: {
    ...mapState(['event']),
  },
};
</script>
