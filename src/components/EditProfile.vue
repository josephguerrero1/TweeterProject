<template>
  <div>
    <button @click="displayForm()">Edit Profile</button>
    <div id="edit_profile">
      <form action="javascript:void(0)">
        <h2>Edit Profile Information:</h2>

        <label for="email">Email: </label>
        <input name="email" type="email" v-model="email" />

        <br />
        <br />

        <label for="username">Username: </label>
        <input name="username" type="text" v-model="username" />

        <br />
        <br />

        <label for="bio">Bio: </label>
        <br />
        <br />
        <textarea
          name="bio"
          id="bio"
          cols="30"
          rows="10"
          v-model="bio"
        ></textarea>

        <br />
        <br />

        <label for="birthdate">Birthdate: </label>
        <input name="birthdate" type="date" v-model="birthdate" />
        <br />
        <br />

        <input @click="editProfile()" type="submit" value="Update" />
      </form>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";

export default {
  name: "edit-profile",
  data() {
    return {
      email: undefined,
      username: undefined,
      birthdate: undefined,
      bio: undefined,
      loginToken: cookies.get("loginToken"),
    };
  },
  methods: {
    editProfile() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "PATCH",
          data: {
            loginToken: this.loginToken,
            bio: this.bio,
            username: this.username,
            email: this.email,
            birthdate: this.birthdate,
          },
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "1NioXLukEERTOXRzZqRDct3zi649GbDOlBpB3kSkQmzvV",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>