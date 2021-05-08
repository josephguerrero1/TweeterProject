<template>
  <div>
    <nav-page></nav-page>
    <h1>Discover Page</h1>
    <hr />
    <div>
      <h3>Tweet One</h3>
      <p>Tweet ID: {{ tweetIdss }}</p>
      <p>Username: {{ usernamess }}</p>
      <p>Content: {{ contentsss }}</p>
      <p>Date Created: {{ createdAtss }}</p>
    </div>
    <hr />
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import NavPage from "@/components/NavPage.vue";
export default {
  name: "discover-page",
  components: {
    NavPage,
  },
  mounted() {
    axios
      .request({
        url: "https://tweeterest.ml/api/tweets",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "1NioXLukEERTOXRzZqRDct3zi649GbDOlBpB3kSkQmzvV",
        },
      })
      .then((response) => {
        console.log(response);
        cookies.set("tweetIdss", response.data[0].tweetId);
        cookies.set("contentsss", response.data[0].content);
        cookies.set("usernamess", response.data[0].username);
        cookies.set("createdAtss", response.data[0].createdAt);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data() {
    return {
      tweetIdss: cookies.get("tweetIdss"),
      contentsss: cookies.get("contentsss"),
      usernamess: cookies.get("usernamess"),
      createdAtss: cookies.get("createdAtss"),
    };
  },
};
</script>

<style scoped>
</style>