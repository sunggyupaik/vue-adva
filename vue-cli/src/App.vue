<template>
  <div id="#app">
    <spinner v-bind:loading="loading"></spinner>
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view> 
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';

export default {
  computed: {
      loading() {
        return this.$store.state.loading;
      }
  },
  components: {
    ToolBar, Spinner
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
