<template>
  <div>
    <div v-if="loginToken === undefined">
      <nav-page></nav-page>
      <h1>Error User is not logged in</h1>
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
    };
  },
};
</script>

<style scoped>
</style>