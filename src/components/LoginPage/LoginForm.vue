<template>
  <div>
    <h1>Login</h1>
    <form action="javascript:void(0)">
      <label for="loginemail">Email: </label>
      <input
        type="email"
        name="loginemail"
        id="loginemail"
        placeholder="Your email address"
        v-model="email"
      />
      <br />
      <br />
      <label for="loginpassword">Password: </label>
      <input
        type="password"
        name="loginpassword"
        id="loginpassword"
        placeholder="Your password"
        v-model="password"
      />
      <br />
      <br />
      <input type="submit" value="Login" id="loginBtn" @click="userLogin()" />
    </form>
    <h3>{{ status }}</h3>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "signup-form",
  data() {
    return {
      email: undefined,
      password: undefined,
      status: undefined,
    };
  },
  methods: {
    userLogin() {
      this.status = "Loading";
      axios
        .request({
          url: "https://tweeterest.ml/api/login",
          method: "POST",
          data: {
            email: this.email,
            password: this.password,
          },
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "1NioXLukEERTOXRzZqRDct3zi649GbDOlBpB3kSkQmzvV",
          },
        })
        .then((response) => {
          console.log(response);
          cookies.set("loginToken", response.data.loginToken);
          cookies.set("userId", response.data.userId);
          this.status = "Login successful!";
          this.$router.push("/profile");
        })
        .catch((error) => {
          console.log(error);
          this.status = "Login failed!";
        });
    },
  },
};
</script>

<style scoped>
</style>