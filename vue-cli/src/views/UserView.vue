<template>
  <div>
    <user-profile v-bind:info="userInfo">
      <template v-slot:username>{{ userInfo.id }}</template>
      <template v-slot:time>{{ 'Joined ' + userInfo.created }}, </template>
      <template v-slot:karma>{{ userInfo.karma }}</template>
  </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: { UserProfile },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const username = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', username);
  }
}
</script>