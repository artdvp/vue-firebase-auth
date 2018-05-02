<template>
  <div id="firebaseui-auth-container">

  </div>
</template>

<script>
import firebase from "firebase";
import firebaseui from "firebaseui";
import { config } from "../helpers/firebaseConfig.js";
export default {
  name: "Auth",
  mounted() {
    let uiConfig = {
      signInSuccessUrl: "/success",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    let ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>
