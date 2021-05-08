<template>
  <div>
    <div id="container">
      <button @click="likeTweet()">Like Tweet</button>
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
    likeTweet() {
      this.status = "Loading...";
      axios
        .request({
          url: "https://tweeterest.ml/api/tweet-likes",
          method: "POST",
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
  grid-template-columns: 0.2fr 1fr;
  column-gap: 30%;
}
</style>