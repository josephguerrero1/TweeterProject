<template>
  <div>
    <nav-page></nav-page>
    <h1>Profile Information</h1>
    <p class="user_info" id="email">Email: {{ otheremail }}</p>
    <p class="user_info" id="username">Username: {{ otherusername }}</p>
    <p class="user_info" id="bio">Bio: {{ otherbio }}</p>
    <p class="user_info" id="birthdate">Birthdate: {{ otherbirthdate }}</p>
    <follow-user></follow-user>
    <br />
    <unfollow-user></unfollow-user>
    <br />
    <router-link to="/discoverusers">Go Back</router-link>
  </div>
</template>

<script>
import NavPage from "@/components/NavPage.vue";
import cookies from "vue-cookies";
import FollowUser from "@/components/FollowUser.vue";
import UnfollowUser from "@/components/UnfollowUser.vue";
export default {
  name: "other-user",
  components: {
    NavPage,
    FollowUser,
    UnfollowUser,
  },
  data() {
    return {
      otherusername: cookies.get("otherusername"),
      otheremail: cookies.get("otheremail"),
      otherbio: cookies.get("otherbio"),
      otherbirthdate: cookies.get("otherbirthdate"),
      otheruserId: cookies.get("otheruserId"),
    };
  },
  mounted() {
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
  },
};
</script>

<style scoped>
</style>