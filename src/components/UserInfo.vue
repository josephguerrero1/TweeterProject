<template>
  <div>
    <h2>User Info:</h2>
    <p class="user_info" id="email">Email: {{ email }}</p>
    <p class="user_info" id="username">Username: {{ username }}</p>
    <p class="user_info" id="bio">Bio: {{ bio }}</p>
    <p class="user_info" id="birthdate">Birthdate: {{ birthdate }}</p>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "user-info",
  mounted() {
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1");
      location.reload();
    }
    axios
      .request({
        url: "https://tweeterest.ml/api/users",
        method: "GET",
        headers: {
          "X-Api-Key": "1NioXLukEERTOXRzZqRDct3zi649GbDOlBpB3kSkQmzvV",
        },
        params: {
          userId: this.userId,
        },
      })
      .then((response) => {
        cookies.set("bio", response.data[response.data.length - 1].bio);
        cookies.set("email", response.data[response.data.length - 1].email);
        cookies.set(
          "username",
          response.data[response.data.length - 1].username
        );
        cookies.set(
          "birthdate",
          response.data[response.data.length - 1].birthdate
        );
        this.userId = cookies.get("userId");
        this.bio = cookies.get("bio");
        this.email = cookies.get("email");
        this.birthdate = cookies.get("birthdate");
        this.username = cookies.get("username");

        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data() {
    return {
      userId: cookies.get("userId"),
      email: "",
      username: "",
      bio: "",
      birthdate: "",
    };
  },
};
</script>

<style scoped>
</style>