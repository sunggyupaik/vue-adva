<template lang="ko">
  <div class="user-container">
    <div>
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="user-description">
      <div v-if="isItemView">
        <router-link v-bind:to="`/user/${info.user}`">
          <slot name="username"></slot>
        </router-link>
      </div>
      <div v-else>
        <slot name="username"></slot>
      </div>
      <div class="time">
        <slot name="time"></slot>
        <span class="karma">
          <slot name="karma"></slot>
        </span>
      </div>      
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: Object
  },
  computed: {
    isItemView() {
      return this.$route.name === "item";
    }
  }
}
</script>
<style scoped>
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