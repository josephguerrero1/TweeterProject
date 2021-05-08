<template>
  <div>
    <h3>Comments:</h3>
    <div>
      <p>Comment: {{ commentcontent }}</p>
      <p>Date Created: {{ createdAtcomment }}</p>
      <p>Comment Id: {{ commentId }}</p>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
export default {
  data() {
    return {
      commentcontent: cookies.get("commentcontent"),
      tweetId: cookies.get("tweetIdss"),
      commentId: cookies.get("commentId"),
      createdAtcomment: cookies.get("createdAtcomment"),
    };
  },
};
</script>

<style scoped>
</style>