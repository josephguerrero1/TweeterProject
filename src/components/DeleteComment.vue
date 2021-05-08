<template>
  <div id="main">
    <div>
      <button>Delete a comment</button>
      <br />
      <form action="javascript:void(0)">
        <h3>Delete a comment:</h3>
        <label for="commentId">Comment Id: </label>
        <input type="text" name="commentId" v-model="commentId" />
        <br />
        <br />
        <input
          type="submit"
          value="Delete"
          id="deleteCommentBtn"
          @click="deleteComment()"
        />
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
      commentId: undefined,
      status: undefined,
    };
  },
  methods: {
    deleteComment() {
      this.status = "Loading...";
      axios
        .request({
          url: "https://tweeterest.ml/api/comments",
          method: "DELETE",
          data: {
            loginToken: this.loginToken,
            commentId: this.commentId,
          },
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "1NioXLukEERTOXRzZqRDct3zi649GbDOlBpB3kSkQmzvV",
          },
        })
        .then((response) => {
          console.log(response);
          cookies.remove("createdAtcomment");
          cookies.remove("commentId");
          cookies.remove("commentcontent");
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
#main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}
</style>