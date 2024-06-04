<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
  components: { ListItem },
  created() {
    this.$store.commit('SET_LOADING', true);

    setTimeout(() => {
      this.$store.dispatch('FETCH_JOBS')
        .then(() => {
          this.$store.commit('SET_LOADING', false);
        })
    }, 3000);
  }
}
</script>