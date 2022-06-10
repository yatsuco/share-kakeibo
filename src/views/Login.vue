<template>
  <div>
    <h2>ログイン</h2>
    <label for="email">Email</label>
    <input id="email" type="email" v-model="email" />
    <br /><br />
    <label for="password">Password</label>
    <input id="password" type="password" v-model="password" />
    <br /><br />
    <button @click="login">ログイン</button>
  </div>
</template>

<script>
import axios from "../axios-auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post(
          "/accounts:signInWithPassword?key=AIzaSyAE-PbN7AUFZZQG9Cz324qvCi8DCE4gc7k",
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>
