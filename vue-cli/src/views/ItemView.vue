<template>
  <div>
    <section>
      <user-profile v-bind:info="itemInfo">
        <template v-slot:username>{{ itemInfo.user }}</template>
        <template v-slot:time>{{ 'Posted ' + itemInfo.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ itemInfo.title }}</h2>
    </section>
    <section>
      <div v-html="itemInfo.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: { UserProfile },
  computed: {
    itemInfo() {
      return this.$store.state.item;
    },
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style>
  .user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
  .fa-user {
    font-size: 2.5rem;
  }
  .user-description {
    padding-left: 8px;
  }
  .time {
    font-size: 0.7rem;
  }
</style>