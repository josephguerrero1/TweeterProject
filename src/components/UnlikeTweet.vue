<template>
  <div>
    <div id="container">
      <button @click="unlikeTweet()">Unlike Tweet</button>
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
    };
  },
  methods: {
    unlikeTweet() {
      this.status = "Loading...";
      axios
        .request({
          url: "https://tweeterest.ml/api/tweet-likes",
          method: "DELETE",
          data: {
            loginToken: this.loginToken,
            tweetId: this.tweetId,
          },
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "1NioXLukEERTOXRzZqRDct3zi649GbDOlBpB3kSkQmzvV",
          },
        })
        .then((response) => {
          console.log(response);
          this.status = "Success!";
          location.reload();
        })
        .catch((error) => {
          console.log(error);
          this.status = "Failure!";
          location.reload();
        });
    },
  },
};
</script>

<style scoped>
#container {
  display: grid;
  grid-template-columns: 0.25fr 1fr;
  column-gap: 30%;
}
</style>