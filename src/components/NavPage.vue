<template>
  <div>
    <router-link to="/profile">Profile Page </router-link> |<router-link
      to="/discover"
      >Discover Page
    </router-link>
    | <router-link to="/feed">Feed Page </router-link> |
    <router-link to="/signup">SignUp Page </router-link> |
    <router-link to="/">Login Page </router-link>
  </div>
</template>

<script>
export default {
  name: "nav-page",
};
</script>

<style scoped>
</style>