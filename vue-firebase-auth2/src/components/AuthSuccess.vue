<template>
  <div>
      <h1>Signup succeeded</h1>
      <button @click="logOut">Log out</button>
      <hr>
      <img :src="photo" v-if="photoShow" :style="'height: 120px'" alt="img" > <br>
      <p>{{ name }}</p>
      <p>{{ email }}</p>
      <p>{{ userId }}</p>
       <hr>
       <pre>{{ user }}</pre>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      photo: "",
      userId: "",
      name: "",
      email: "",
      user: {},
      photoShow: false
    };
  },
  created() {
    console.log("auth created");
    this.user = firebase.auth().currentUser;
    if (this.user) {
      if (this.name.displayName) {
        this.name = this.name.displayName;
        this.photoShow = true;
      } else {
        this.photoShow = false;
      }
      this.email = this.user.email;
      this.photo = this.user.photoURL;
      this.userId = this.user.uid;
    }
  },
  mounted() {
    console.log("auth mounted");
    this.callFirebase();
  },
  methods: {
    logOut() {
      let _router = this.$router;
      firebase.auth().signOut();
      firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
          _router.push({path: 'auth'})
        }
      });
    },
    callFirebase() {
      this.user = firebase.auth().currentUser;
      if (this.user) {
        if (this.name.displayName) {
          this.name = this.name.displayName;
          this.photoShow = true;
        } else {
          this.photoShow = false;
        }
        this.email = this.user.email;
        this.photo = this.user.photoURL;
        this.userId = this.user.uid;
      }
    }
  }
};
</script>
