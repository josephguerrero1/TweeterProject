<template>
  <div>
    <nav-page></nav-page>
    <h1>Feed Page</h1>
    <new-tweet></new-tweet>
  </div>
</template>

<script>
import NavPage from "@/components/NavPage.vue";
import NewTweet from "@"
export default {
  name: "feed-page",
  components: {
    NavPage,
  },
};
</script>

<style scoped>
</style>