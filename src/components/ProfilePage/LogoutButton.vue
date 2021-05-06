<template>
  <div>
    <button @click="userLogout()">Logout</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "logout-button",
  data() {
    return {};
  },
  methods: {
    userLogout() {
      axios
        .request({
          url: "https://tweeterest.ml/api/login",
          method: "DELETE",
          headers: {
            "X-Apis-Key": "1NioXLukEERTOXRzZqRDct3zi649GbDOlBpB3kSkQmzvV",
            "Content-Type": "application/json",
          },
          data: {},
        })
        .then((response) => {
          console.log(response);
          cookies.remove("loginToken");
          cookies.remove("userId");
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