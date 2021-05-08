<template>
  <div id="main">
    <div>
      <button>Update a comment</button>
      <br />
      <h3>Update a comment:</h3>
      <form action="javascript:void(0)">
        <label for="commentId">Comment Id: </label>
        <input type="text" name="commentId" v-model="commentId" />
        <br />
        <br />
        <label for="contentcomment">Change Comment: </label>
        <br />
        <br />
        <textarea
          name="contentcomment"
          id="contentcomment"
          cols="30"
          rows="10"
          v-model="commentcontent"
        ></textarea>
        <br />
        <br />
        <input type="submit" value="Update Comment" @click="updateComment()" />
      </form>
    </div>
    <h3>{{ status }}</h3>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";

export default {
  data() {
    return {
      loginToken: cookies.get("loginToken"),
      commentId: cookies.get("commentId"),
      commentcontent: cookies.get("commentcontent"),
      status: undefined,
    };
  },
  methods: {
    updateComment() {
      this.status = "Loading...";
      axios
        .request({
          url: "https://tweeterest.ml/api/comments",
          method: "PATCH",
          data: {
            loginToken: this.loginToken,
            commentId: this.commentId,
            content: this.commentcontent,
          },
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "1NioXLukEERTOXRzZqRDct3zi649GbDOlBpB3kSkQmzvV",
          },
        })
        .then((response) => {
          console.log(response);
          cookies.remove("commentcontent");
          cookies.set("commentcontent", response.data.content);
          this.status = "Success!";
          location.reload();
        })
        .catch((error) => {
          console.log(error);
          this.status = "Failed!";
        });
    },
  },
};
</script>

<style scoped>
#main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}
</style>