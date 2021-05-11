<template>
  <div>
    <button @click="displayForm()">Edit Tweet</button>
    <br />
    <br />
    <form id="editTweetForm" action="javascript:void(0)">
      <label for="content">Content: </label>
      <br />
      <br />
      <textarea
        name="content"
        id="tweet-content"
        cols="30"
        rows="10"
        v-model="content"
      ></textarea>
      <br />
      <br />
      <input type="submit" value="Update" @click="updateTweet()" />
    </form>
    <h3>{{ status }}</h3>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  name: "update-tweet",
  data() {
    return {
      tweetId: cookies.get("tweetId"),
      content: undefined,
      loginToken: cookies.get("loginToken"),
      status: undefined,
      contents: cookies.get("contents"),
    };
  },
  mounted() {
    let editTweetForm = document.getElementById("editTweetForm");
    editTweetForm.style.display = "none";
  },
  methods: {
    displayForm() {
      let editTweetForm = document.getElementById("editTweetForm");
      console.log(editTweetForm.style.display);
      if (editTweetForm.style.display === "block") {
        editTweetForm.style.display = "none";
      } else if (editTweetForm.style.display === "none") {
        editTweetForm.style.display = "block";
      }
    },
    updateTweet() {
      this.status = "Loading...";
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "PATCH",
          data: {
            loginToken: this.loginToken,
            tweetId: this.tweetId,
            content: this.content,
          },
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "1NioXLukEERTOXRzZqRDct3zi649GbDOlBpB3kSkQmzvV",
          },
        })
        .then((response) => {
          console.log(response);
          cookies.remove("contents");
          cookies.set("contents", response.data.content);
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
</style>