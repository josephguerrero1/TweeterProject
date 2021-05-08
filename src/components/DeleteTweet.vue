<template>
  <div id="main">
    <div>
      <button @click="displayForm()">Delete Tweet</button>
      <br />
      <form action="javascript:void(0)">
        <h4>Enter Tweet ID to delete:</h4>
        <label for="tweetId">Tweet ID: </label>
        <br />
        <br />
        <input type="text" name="tweetId" v-model="tweetId" />
        <br />
        <br />
        <input
          type="submit"
          value="Delete"
          id="deleteTweetBtn"
          @click="deleteTweet()"
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
  name: "delete-tweet",
  data() {
    return {
      tweetId: undefined,
      loginToken: cookies.get("loginToken"),
      status: undefined,
    };
  },
  methods: {
    deleteTweet() {
      this.status = "Loading...";
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
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
          this.status = "Tweet has been deleted!";
          cookies.remove("tweetId"),
            cookies.remove("contents"),
            cookies.remove("createdAt"),
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