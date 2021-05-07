<template>
  <div>
    <nav-page></nav-page>
    <h1>Profile Information</h1>
    <p class="user_info" id="email">Email: {{ email }}</p>
    <p class="user_info" id="username">Username: {{ username }}</p>
    <p class="user_info" id="bio">Bio: {{ bio }}</p>
    <p class="user_info" id="birthdate">Birthdate: {{ birthdate }}</p>
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
      username: cookies.get("username{{ this.userId }}"),
      email: cookies.get("email{{ this.userId }}"),
      bio: cookies.get("bio{{ this.userId }}"),
      birthdate: cookies.get("birthdate{{ this.userId }}"),
    };
  },
};
</script>

<style scoped>
</style>