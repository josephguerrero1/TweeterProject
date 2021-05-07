<template>
  <div>
    <button @click="displayForm()">Delete Profile</button>
    <div id="delete_profile">
      <form action="javascript:void(0)">
        <h2>Type in password to delete account</h2>
        <label for="password">Password: </label>
        <input type="password" name="password" v-model="password" />
        <br />
        <br />
        <input
          id="delete_account_btn"
          type="submit"
          value="Delete Account"
          @click="deleteProfile()"
        />
      </form>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";

export default {
  name: "delete-profile",
  data() {
    return {
      password: undefined,
      loginToken: cookies.get("loginToken"),
    };
  },
  methods: {
    deleteProfile() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "DELETE",
          data: {
            password: this.password,
            loginToken: this.loginToken,
          },
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "1NioXLukEERTOXRzZqRDct3zi649GbDOlBpB3kSkQmzvV",
          },
        })
        .then((response) => {
          console.log(response);
          cookies.remove("loginToken");
          cookies.remove("password");
          cookies.remove("bio");
          cookies.remove("email");
          cookies.remove("username");
          cookies.remove("birthdate");
          cookies.remove("userId");
          cookies.remove("imageUrl");
          cookies.remove("bannerUrl");
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
#delete_account_btn {
  color: red;
}
</style>