import ListView from './ListView.vue';
import { h } from 'vue';

export default function createListView(name) {
  return {
    name: 'HOC Component',
    created() {
      this.$store.commit('SET_LOADING', true);
  
      setTimeout(() => {
          this.$store.dispatch('FETCH_LIST', this.$route.name)
          .then(() => {
              this.$store.commit('SET_LOADING', false);
          })
      }, 3000);
    },
    render() {
      return h(ListView);
    }
  }
}