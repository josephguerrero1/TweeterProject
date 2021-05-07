<template>
  <div>
    <div v-if="loginToken == undefined">
      <nav-page></nav-page>
      <h1>Profile Page</h1>
      <h1>ERROR user not logged in</h1>
    </div>
    <div v-else>
      <nav-page></nav-page>
      <h1>Profile Page</h1>
      <user-info></user-info>
      <logout-button></logout-button>
      <br>
      <hr>
      <br />
      <edit-profile></edit-profile>
      <br>
      <hr>
      <br>
      <delete-profile></delete-profile>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import UserInfo from "@/components/UserInfo.vue";
import NavPage from "@/components/NavPage.vue";
import LogoutButton from "@/components/LogoutButton.vue";
import EditProfile from "@/components/EditProfile.vue";
import DeleteProfile from "@/components/DeleteProfile.vue";

export default {
  name: "profile-page",
  data() {
    return {
      loginToken: cookies.get("loginToken"),
    };
  },
  components: {
    UserInfo,
    NavPage,
    LogoutButton,
    EditProfile,
    DeleteProfile,
  },
};
</script>

<style scoped>
</style>