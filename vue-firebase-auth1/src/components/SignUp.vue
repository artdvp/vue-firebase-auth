<template>
  <div class="signUp">
      <p>Let's create a new account !</p>
      <input type="text" placeholder="Email" v-model="email"><br>
      <input type="password" placeholder="Password" v-model="password"><br>
      <button @click="signUp">Sign Up</button>
      <span>or go back to <router-link to="/login">Login</router-link>.</span>   
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "SignUp",
  data: function() {
    return {
        email: '',
        password: ''
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            alert("Your account has been created !");
          },
          function(err) {
            alert("Oops." + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
.signUp {
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
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
