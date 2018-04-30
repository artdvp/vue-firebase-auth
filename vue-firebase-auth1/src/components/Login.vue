<template>
  <div class="login">
      <h3>Sign In</h3>
      <input type="text" placeholder="Email" v-model="email"><br>
      <input type="password" placeholder="Password" v-model="password"><br>
      <button v-on:click="signIn">Sign In</button>
      <p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>     
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn: function() {
      //this.$router.replace('hello')
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
            this.$router.replace('hello')
        },(error) => {
            alert('Oops. ' + error.message)
        });
      this.email = "";
      this.password = "";
    },
    logInComplete: function() {
      this.$router.replace("hello");
    }
  }
};
</script>

<style scoped>
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
