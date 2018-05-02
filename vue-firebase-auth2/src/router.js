import VueRouter from "vue-router";
import Auth from "./components/Auth.vue";
import AuthSuccess from "./components/AuthSuccess.vue";
import firebase from "firebase";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: '/auth'
    },
    {
      path:'/',
      redirect: '/auth'
    },
    {
      path: "/auth",
      name: "Auth",
      component: Auth
    },
    {
      path: "/",
      name: "AuthSuccess",
      component: AuthSuccess
    },
    {
      path: "/success",
      name: "Sucess",
      component: AuthSuccess,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("auth");
  else if (!requiresAuth && currentUser) next("sucess");
  else next();
});

export default router;
