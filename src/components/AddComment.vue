<template>
  <div>
    <button>Add comment:</button>
    <br />
    <div>
      <form action="javascript:void(0)">
        <h3>Add a comment:</h3>
        <label for="content">Comment: </label>
        <br />
        <br />
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          v-model="content"
        ></textarea>
        <br />
        <br />
        <input type="submit" value="Post" @click="addComment()" />
      </form>
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
      content: undefined,
      loginToken: cookies.get("loginToken"),
      tweetId: cookies.get("tweetIdss"),
      status: undefined,
    };
  },
  methods: {
    addComment() {
      this.status = "Loading...";
      axios
        .request({
          url: "https://tweeterest.ml/api/comments",
          method: "POST",
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
          cookies.set("commentId", response.data.commentId);
          cookies.set("commentcontent", response.data.content);
          cookies.set("createdAtcomment", response.data.createdAt);
          this.status = "Success!";
          location.reload();
        })
        .catch((error) => {
          console.log(error);
          this.status = "Failure!";
        });
    },
    function1() {
      cookies.set("createdAtcomment2", "");
    },
  },
};
</script>

<style scoped>
</style>