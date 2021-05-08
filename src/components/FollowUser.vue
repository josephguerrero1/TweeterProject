<template>
  <div>
    <p v-if="following">Following</p>
    <div id="container">
      <button @click="followUser()">Follow User</button>
      <h3>{{ status }}</h3>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  data() {
    return {
      loginToken: cookies.get("loginToken"),
      tweetId: cookies.get("tweetIdss"),
      status: undefined,
      followId: cookies.get("otheruserId"),
      following: cookies.get("following"),
    };
  },
  methods: {
    followUser() {
      this.status = "Loading...";
      axios
        .request({
          url: "https://tweeterest.ml/api/follows",
          method: "POST",
          data: {
            loginToken: this.loginToken,
            followId: this.followId,
          },
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "1NioXLukEERTOXRzZqRDct3zi649GbDOlBpB3kSkQmzvV",
          },
        })
        .then((response) => {
          console.log(response);
          cookies.set("following", "dafbsfgb");
          this.status = "Success!";
          location.reload();
        })
        .catch((error) => {
          console.log(error);
          this.status = "Failure!";
        });
    },
  },
};
</script>

<style scoped>
#container {
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  column-gap: 30%;
}
p {
  color: green;
  font-weight: bold;
}
</style>