<template>
  <div>
    <button @click="displayForm()">New Tweet</button>
    <div id="newTweetForm">
      <h2>Create New Tweet</h2>
      <form action="javascript:void(0)">
        <label for="content">Content: </label>
        <br />
        <br />
        <textarea
          name="content"
          id="contentBox"
          cols="30"
          rows="10"
          v-model="content"
        ></textarea>
        <br />
        <br />
        <input type="submit" value="Create" @click="createTweet()" />
      </form>
      <h3>{{ status }}</h3>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";

export default {
  name: "new-tweet",
  data() {
    return {
      content: undefined,
      loginToken: cookies.get("loginToken"),
      status: undefined,
    };
  },
  methods: {
    createTweet() {
      this.status = "Loading...";
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "POST",
          data: {
            loginToken: this.loginToken,
            content: this.content,
          },
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "1NioXLukEERTOXRzZqRDct3zi649GbDOlBpB3kSkQmzvV",
          },
        })
        .then((response) => {
          console.log(response);
          cookies.set("tweetId", response.data.tweetId);
          cookies.set("contents", response.data.content);
          cookies.set("createdAt", response.data.createdAt);
          this.status = "Success!";
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
</style>