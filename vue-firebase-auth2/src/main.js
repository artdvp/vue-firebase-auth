import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import firebase from "firebase";
import firebaseui from "firebaseui";
import router from "./router";
import { config } from "./helpers/firebaseConfig";

Vue.use(VueRouter);

let app;

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      el: "#app",
      router,
      components: { App },
      template: "<App/>"
    });
    // if (user) {
    //   this.$router.push('/success');
    // } else {
    //   this.$router.push('/auth');
    // }
  }
  
});
