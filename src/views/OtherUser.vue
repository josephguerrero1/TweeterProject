<template>
  <div>
    <nav-page></nav-page>
    <h1>Profile Information</h1>
    <p class="user_info" id="email">Email: {{ otheremail }}</p>
    <p class="user_info" id="username">Username: {{ otherusername }}</p>
    <p class="user_info" id="bio">Bio: {{ otherbio }}</p>
    <p class="user_info" id="birthdate">Birthdate: {{ otherbirthdate }}</p>
    <router-link to="/discoverusers">Go Back</router-link>
  </div>
</template>

<script>
import NavPage from "@/components/NavPage.vue";
import cookies from "vue-cookies";
export default {
  name: "other-user",
  components: {
    NavPage,
  },
  computed: {
    userId() {
      return this.$store.state.userId;
    },
  },
  data() {
    return {
      otherusername: cookies.get("otherusername"),
      otheremail: cookies.get("otheremail"),
      otherbio: cookies.get("otherbio"),
      otherbirthdate: cookies.get("otherbirthdate"),
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