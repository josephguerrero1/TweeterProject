<template>
  <div>
    <nav-page></nav-page>
    <signup-form></signup-form>
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import NavPage from "@/components/NavPage.vue";

export default {
  name: "signup-page",
  components: {
    SignupForm,
    NavPage,
  },
};
</script>

<style scoped>
</style>