<template>
  <div>
    <h2>User Info:</h2>
    <p class="user_info" id="userId">User Id: {{ userId }}</p>
    <p class="user_info" id="email">Email: {{ email }}</p>
    <p class="user_info" id="username">Username: {{ username }}</p>
    <p class="user_info" id="bio">Bio: {{ bio }}</p>
    <p class="user_info" id="birthdate">Birthdate: {{ birthdate }}</p>
    <p>Profile Picture:</p>
    <img id="profile_image" src="" alt="Profile Picture" />
    <br />
    <br />
    <p>Profile Banner:</p>
    <img id="profile_banner" src="" alt="Profile Banner" />
    <br />
    <br />
    <button @click="getUserInfo()">Click me</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "user-info",
  data() {
    return {
      userId: cookies.get("userId"),
      email: undefined,
      username: undefined,
      bio: undefined,
      birthdate: undefined,
      imageUrl: undefined,
      bannerUrl: undefined,
    };
  },
  methods: {
    getUserInfo() {
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
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>