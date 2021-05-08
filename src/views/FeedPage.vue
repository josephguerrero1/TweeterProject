<template>
  <div>
    <nav-page></nav-page>
    <h1>Feed Page</h1>
    <new-tweet></new-tweet>
  </div>
</template>

<script>
import NavPage from "@/components/NavPage.vue";
import NewTweet from "@/components/NewTweet.vue";
export default {
  name: "feed-page",
  components: {
    NavPage,
    NewTweet,
  },
};
</script>

<style scoped>
</style>