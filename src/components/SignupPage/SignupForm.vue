<template>
  <div>
    <h1>Sign Up</h1>
    <form action="javascript:void(0)">
      <label for="signupemail">Email: </label>
      <input
        type="email"
        name="signupemail"
        id="signupemail"
        placeholder="Your email address"
        v-model="email"
      />
      <br />
      <br />
      <label for="signupusername">Username: </label>
      <input
        type="text"
        name="signupusername"
        id="signupusername"
        placeholder="Your username"
        v-model="username"
      />
      <br />
      <br />
      <label for="signuppassword">Password: </label>
      <input
        type="password"
        name="signuppassword"
        id="signuppassword"
        placeholder="Your password"
        v-model="password"
      />
      <br />
      <br />
      <label for="signupbio">Bio: </label>
      <br />
      <br />
      <textarea
        cols="30"
        rows="10"
        type="text"
        name="signupbio"
        id="signupbio"
        placeholder="Tell us about yourself"
        v-model="bio"
      ></textarea>
      <br />
      <br />
      <label for="signupbirthdate">Birthdate: </label>
      <input
        type="date"
        name="signupbirthdate"
        id="signupbirthdate"
        v-model="birthdate"
      />
      <br />
      <br />
      <label for="signupimageUrl">ImageUrl: </label>
      <input
        type="text"
        name="signupimageUrl"
        id="signupimageUrl"
        placeholder="Your profile image Url"
        v-model="imageUrl"
      />
      <br />
      <br />
      <label for="signupbannerUrl">BannerUrl: </label>
      <input
        type="text"
        name="signupbannerUrl"
        id="signupbannerUrl"
        placeholder="Your profile banner Url"
        v-model="bannerUrl"
      />
      <br />
      <br />
      <input
        type="submit"
        value="Signup"
        id="signupBtn"
        @click="userSignup()"
      />
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
      username: undefined,
      password: undefined,
      bio: undefined,
      birthdate: undefined,
      imageUrl: undefined,
      bannerUrl: undefined,
      status: undefined,
    };
  },
  methods: {
    userSignup() {
      this.status = "Loading";
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "POST",
          data: {
            email: this.email,
            username: this.username,
            password: this.password,
            bio: this.bio,
            birthdate: this.birthdate,
            imageUrl: this.imageUrl,
            bannerUrl: this.bannerUrl,
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
          this.status = "Sign up successful!";
          this.$router.push("/profile");
        })
        .catch((error) => {
          console.log(error);
          this.status = "Sign up failed!";
        });
    },
  },
};
</script>

<style scoped>
</style>