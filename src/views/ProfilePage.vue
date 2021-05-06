<template>
  <div>
    <div v-if="loginToken == undefined">
      <h1>ERROR user not logged in</h1>
      <router-link to="/login">Go to the login page</router-link>
    </div>
    <div v-else>
      <h1>Profile Page</h1>
      <user-info></user-info>
      <logout-button></logout-button>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import UserInfo from "@/components/ProfilePage/UserInfo.vue";
import LogoutButton from "@/components/ProfilePage/LogoutButton.vue";
export default {
  name: "profile-page",
  data() {
    return {
      loginToken: cookies.get("loginToken"),
    };
  },
  components: {
    UserInfo,
    LogoutButton,
  },
};
</script>

<style scoped>
</style>