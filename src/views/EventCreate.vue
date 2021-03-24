<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <label>Select a category</label>
      <select>
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
      <h3>Name and describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input type="text" placeholder="Add an event title" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EventCreate',
  data() {
    return {
      categories: this.$store.state.categories,
      event: {},
    };
  },
  methods: {
    createEvent() {
      console.log('xxx');
    },
  },
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
