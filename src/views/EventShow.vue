<template>
  <div>
    <div class="event-header">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h1 class="title">{{ event.title }}</h1>
      <h5>Organized by {{ event.organizer ? event.organizer : '' }}</h5>
      <h5>Category: {{ event.category }}</h5>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'EventShow',
  props: ['id'],
  created() {
    this.fetchEvent(this.id);
  },
  computed: mapState({
    event: state => state.event.event,
  }),
  methods: mapActions('event', ['fetchEvent']),
};
</script>

<style scoped>
.event-header > .title {
  margin: 0;
}
</style>
