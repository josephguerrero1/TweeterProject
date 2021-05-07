<template>
  <div>
    <button @click="userLogout()">Logout</button>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";

export default {
  name: "logout-button",
  data() {
    return {
      loginToken: cookies.get("loginToken"),
    };
  },
  methods: {
    userLogout() {
      axios
        .request({
          url: "https://tweeterest.ml/api/login",
          method: "DELETE",
          data: {
            loginToken: this.loginToken,
          },
          headers: {
            "X-Api-Key": "1NioXLukEERTOXRzZqRDct3zi649GbDOlBpB3kSkQmzvV",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      cookies.remove("loginToken");
      cookies.remove("password");
      cookies.remove("bio");
      cookies.remove("email");
      cookies.remove("username");
      cookies.remove("birthdate");
      cookies.remove("userId");
      cookies.remove("imageUrl");
      cookies.remove("bannerUrl");
      location.reload();
    },
  },
};
</script>

<style scoped>
</style>