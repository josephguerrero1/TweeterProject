<template>
  <div>
    <nav-page></nav-page>

    <h1>Discover Users</h1>
    <p>
      {{ username }} | <router-link to="/otheruser">View profile</router-link>
    </p>
  </div>
</template>

<script>
import NavPage from "@/components/NavPage.vue";
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "discover-users",
  components: {
    NavPage,
  },
  computed: {
    userId() {
      return this.$store.state.userId;
    },
  },
  mounted() {
    axios
      .request({
        url: "https://tweeterest.ml/api/users",
        method: "GET",
        params: {
          userId: this.userId,
        },
        headers: {
          "X-Api_Key": "1NioXLukEERTOXRzZqRDct3zi649GbDOlBpB3kSkQmzvV",
        },
      })
      .then((response) => {
        console.log(response);
        cookies.set("username{{ this.userId }}", response.data.username);
        cookies.set("email{{ this.userId }}", response.data.email);
        cookies.set("bio{{ this.userId }}", response.data.bio);
        cookies.set("birthdate{{ this.userId }}", response.data.birthdate);
        cookies.set("userId{{ this.userId }}", this.userId);
      })
      .catch((error) => {
        console.log(error);
      });
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