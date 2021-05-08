<template>
  <div>
    <h1>My Tweets</h1>
    <hr />
    <div class="tweet-container">
      <h4>Latest Tweet:</h4>
      <p>Tweet ID: {{ tweetId }}</p>
      <p>Username: {{ username }}</p>
      <p>Content: {{ contents }}</p>
      <p>Date Created: {{ createdAt }}</p>
      <update-tweet></update-tweet>
    </div>
    <hr />
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
import UpdateTweet from "./UpdateTweet.vue";

export default {
  name: "user-tweets",
  components: {
    UpdateTweet,
  },
  mounted() {
    axios
      .request({
        url: "https://tweeterest.ml/api/tweets",
        method: "GET",
        params: {
          userId: this.userId,
        },
        headers: {
          "X-Api-Key": "1NioXLukEERTOXRzZqRDct3zi649GbDOlBpB3kSkQmzvV",
        },
      })
      .then((response) => {
        console.log(response);
        cookies.set(
          "contents",
          response.data[response.data.length - 1].content
        );
        cookies.set(
          "createdAt",
          response.data[response.data.length - 1].createdAt
        );
        cookies.set("tweetId", response.data[response.data.length - 1].tweetId);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data() {
    return {
      contents: cookies.get("contents"),
      createdAt: cookies.get("createdAt"),
      userId: cookies.get("userId"),
      username: cookies.get("username"),
      tweetId: cookies.get("tweetId"),
    };
  },
};
</script>

<style scoped>
</style>