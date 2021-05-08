<template>
  <div>
    <nav-page></nav-page>

    <h1>Discover Users</h1>
    <hr />
    <p>
      {{ username0 }} |
      <button @click="set0()">
        <router-link to="/otheruser">View profile</router-link>
      </button>
    </p>
    <hr />
    <p>
      {{ username1 }} |
      <button @click="set1()">
        <router-link to="/otheruser">View profile</router-link>
      </button>
    </p>
    <hr />
    <p>
      {{ username2 }} |
      <button @click="set2()">
        <router-link to="/otheruser">View profile</router-link>
      </button>
    </p>
    <hr />
    <p>
      {{ username3 }} |
      <button @click="set3()">
        <router-link to="/otheruser">View profile</router-link>
      </button>
    </p>
    <hr />
    <p>
      {{ username4 }} |
      <button @click="set4()">
        <router-link to="/otheruser">View profile</router-link>
      </button>
    </p>
    <hr />
    <p>
      {{ username5 }} |
      <button @click="set5()">
        <router-link to="/otheruser">View profile</router-link>
      </button>
    </p>
    <hr />

    <p>
      {{ username6 }} |
      <button @click="set6()">
        <router-link to="/otheruser">View profile</router-link>
      </button>
    </p>
    <hr />
    <p>
      {{ username7 }} |
      <button @click="set7()">
        <router-link to="/otheruser">View profile</router-link>
      </button>
    </p>
    <hr />
    <p>
      {{ username8 }} |
      <button @click="set8()">
        <router-link to="/otheruser">View profile</router-link>
      </button>
    </p>
    <hr />
    <p>
      {{ username9 }} |
      <button @click="set9()">
        <router-link to="/otheruser">View profile</router-link>
      </button>
    </p>
    <hr />
    <p>
      {{ username10 }} |
      <button @click="set10()">
        <router-link to="/otheruser">View profile</router-link>
      </button>
    </p>
    <hr />
  </div>
</template>

<script>
import NavPage from "@/components/NavPage.vue";
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "discover-users",
  components: {
    NavPage,
  },
  methods: {
    set0() {
      cookies.remove("otherusername");
      cookies.remove("otheremail");
      cookies.remove("otherbio");
      cookies.remove("otherbirthdate");
      cookies.set("otherusername", this.username0);
      cookies.set("otheremail", this.email0);
      cookies.set("otherbio", this.bio0);
      cookies.set("otherbirthdate", this.birthdate0);
    },
    set1() {
      cookies.remove("otherusername");
      cookies.remove("otheremail");
      cookies.remove("otherbio");
      cookies.remove("otherbirthdate");
      cookies.set("otherusername", this.username1);
      cookies.set("otheremail", this.email1);
      cookies.set("otherbio", this.bio1);
      cookies.set("otherbirthdate", this.birthdate1);
    },
    set2() {
      cookies.remove("otherusername");
      cookies.remove("otheremail");
      cookies.remove("otherbio");
      cookies.remove("otherbirthdate");
      cookies.set("otherusername", this.username2);
      cookies.set("otheremail", this.email2);
      cookies.set("otherbio", this.bio2);
      cookies.set("otherbirthdate", this.birthdate2);
    },
    set3() {
      cookies.remove("otherusername");
      cookies.remove("otheremail");
      cookies.remove("otherbio");
      cookies.remove("otherbirthdate");
      cookies.set("otherusername", this.username3);
      cookies.set("otheremail", this.email3);
      cookies.set("otherbio", this.bio3);
      cookies.set("otherbirthdate", this.birthdate3);
    },
    set4() {
      cookies.remove("otherusername");
      cookies.remove("otheremail");
      cookies.remove("otherbio");
      cookies.remove("otherbirthdate");
      cookies.set("otherusername", this.username4);
      cookies.set("otheremail", this.email4);
      cookies.set("otherbio", this.bio4);
      cookies.set("otherbirthdate", this.birthdate4);
    },
    set5() {
      cookies.remove("otherusername");
      cookies.remove("otheremail");
      cookies.remove("otherbio");
      cookies.remove("otherbirthdate");
      cookies.set("otherusername", this.username5);
      cookies.set("otheremail", this.email5);
      cookies.set("otherbio", this.bio5);
      cookies.set("otherbirthdate", this.birthdate5);
    },
    set6() {
      cookies.remove("otherusername");
      cookies.remove("otheremail");
      cookies.remove("otherbio");
      cookies.remove("otherbirthdate");
      cookies.set("otherusername", this.username6);
      cookies.set("otheremail", this.email6);
      cookies.set("otherbio", this.bio6);
      cookies.set("otherbirthdate", this.birthdate6);
    },
    set7() {
      cookies.remove("otherusername");
      cookies.remove("otheremail");
      cookies.remove("otherbio");
      cookies.remove("otherbirthdate");
      cookies.set("otherusername", this.username7);
      cookies.set("otheremail", this.email7);
      cookies.set("otherbio", this.bio7);
      cookies.set("otherbirthdate", this.birthdate7);
    },
    set8() {
      cookies.remove("otherusername");
      cookies.remove("otheremail");
      cookies.remove("otherbio");
      cookies.remove("otherbirthdate");
      cookies.set("otherusername", this.username8);
      cookies.set("otheremail", this.email8);
      cookies.set("otherbio", this.bio1);
      cookies.set("otherbirthdate", this.birthdate8);
    },
    set9() {
      cookies.remove("otherusername");
      cookies.remove("otheremail");
      cookies.remove("otherbio");
      cookies.remove("otherbirthdate");
      cookies.set("otherusername", this.username9);
      cookies.set("otheremail", this.email9);
      cookies.set("otherbio", this.bio9);
      cookies.set("otherbirthdate", this.birthdate9);
    },
    set10() {
      cookies.remove("otherusername");
      cookies.remove("otheremail");
      cookies.remove("otherbio");
      cookies.remove("otherbirthdate");
      cookies.set("otherusername", this.username10);
      cookies.set("otheremail", this.email10);
      cookies.set("otherbio", this.bio10);
      cookies.set("otherbirthdate", this.birthdate10);
    },
  },
  mounted() {
    axios
      .request({
        url: "https://tweeterest.ml/api/users",
        method: "GET",
        headers: {
          "X-Api-Key": "1NioXLukEERTOXRzZqRDct3zi649GbDOlBpB3kSkQmzvV",
        },
      })
      .then((response) => {
        console.log(response);
        let i;
        for (i = 0; i < response.data.length; i++) {
          cookies.set("username" + i, response.data[i].username);
          cookies.set("bio" + i, response.data[i].bio);
          cookies.set("birthdate" + i, response.data[i].birthdate);
          cookies.set("email" + i, response.data[i].email);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data() {
    return {
      username0: cookies.get("username0"),
      bio0: cookies.get("bio0"),
      birthdate0: cookies.get("birthdate0"),
      email0: cookies.get("email0"),

      username1: cookies.get("username1"),
      bio1: cookies.get("bio1"),
      birthdate1: cookies.get("birthdate1"),
      email1: cookies.get("email1"),

      username2: cookies.get("username2"),
      bio2: cookies.get("bio2"),
      birthdate2: cookies.get("birthdate2"),
      email2: cookies.get("email2"),

      username3: cookies.get("username3"),
      bio3: cookies.get("bio3"),
      birthdate3: cookies.get("birthdate3"),
      email3: cookies.get("email3"),

      username4: cookies.get("username4"),
      bio4: cookies.get("bio4"),
      birthdate4: cookies.get("birthdate4"),
      email4: cookies.get("email4"),

      username5: cookies.get("username5"),
      bio5: cookies.get("bio5"),
      birthdate5: cookies.get("birthdate5"),
      email5: cookies.get("email5"),

      username6: cookies.get("username6"),
      bio6: cookies.get("bio6"),
      birthdate6: cookies.get("birthdate6"),
      email6: cookies.get("email6"),

      username7: cookies.get("username7"),
      bio7: cookies.get("bio7"),
      birthdate7: cookies.get("birthdate7"),
      email7: cookies.get("email7"),

      username8: cookies.get("username8"),
      bio8: cookies.get("bio8"),
      birthdate8: cookies.get("birthdate8"),
      email8: cookies.get("email8"),

      username9: cookies.get("username9"),
      bio9: cookies.get("bio9"),
      birthdate9: cookies.get("birthdate9"),
      email9: cookies.get("email9"),

      username10: cookies.get("username10"),
      bio10: cookies.get("bio10"),
      birthdate10: cookies.get("birthdate10"),
      email10: cookies.get("email10"),
    };
  },
};
</script>

<style scoped>
</style>