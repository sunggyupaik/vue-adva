export default {
  created() {
    this.$store.commit('SET_LOADING', true);

    setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
            this.$store.commit('SET_LOADING', false);
        })
    }, 1500);
  }
}