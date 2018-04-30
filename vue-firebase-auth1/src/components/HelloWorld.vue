<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Hello {{ nameUser }}</h2>
    <button @click="logout">LogOut</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      nameUser: ""
    };
  },
  mounted: function(){
    let user = firebase.auth().currentUser;
      if (user != null) {
          this.nameUser = user.displayName === null ? this.whenEmail(user.email) : user.displayName
      }
  },
  methods: {
    getUser: function() {
      let user = firebase.auth().currentUser;
      if (user != null) {
        console.log(user);
      }
    },
    whenEmail: function(email){
      let newName;
      if(email !== null || email !== undefined){
        newName = email.split('@')
        if(newName[0] !== null || newName[0] !== undefined){
          newName = newName[0]
        }else {
          newName = ''
        }
      }else {
        newName = ''
      }
      return newName;
    },
    logout: function(){
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  },
  computed: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
