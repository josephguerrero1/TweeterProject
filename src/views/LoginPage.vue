<template>
  <div>
    <nav-page></nav-page>
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import NavPage from "@/components/NavPage.vue";
export default {
  name: "login-page",
  components: {
    LoginForm,
    NavPage,
  },
};
</script>

<style scoped>
</style>