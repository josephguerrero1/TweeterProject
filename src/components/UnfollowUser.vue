<template>
  <div>
    <div id="container">
      <button @click="unfollowUser()">Unfollow User</button>
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
    unfollowUser() {
      this.status = "Loading...";
      axios
        .request({
          url: "https://tweeterest.ml/api/follows",
          method: "DELETE",
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
          cookies.remove("following");
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
  grid-template-columns: 0.25fr 1fr;
  column-gap: 30%;
}
</style>