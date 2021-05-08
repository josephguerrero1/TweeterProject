<template>
  <div>
    <div v-if="!contents">
      <nav-page></nav-page>
      <h1>User has no tweets</h1>
      <router-link to="/feed">Create a tweet</router-link>
    </div>
    <div v-else>
      <nav-page></nav-page>
      <user-tweets></user-tweets>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import NavPage from "@/components/NavPage.vue";
import UserTweets from "@/components/UserTweets.vue";
export default {
  name: "my-tweets",
  components: {
    NavPage,
    UserTweets,
  },
  data() {
    return {
      loginToken: cookies.get("loginToken"),
      contents: cookies.get("contents"),
    };
  },
};
</script>

<style scoped>
</style>