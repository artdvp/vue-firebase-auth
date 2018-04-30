# vue-firebase-auth

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Learn from Tutorial

- [Vue 2 + Firebase: How to build a Vue app with Firebase authentication system in 15 minutes](https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c)

> ignore file firebase_config.js

```js
let config = {
    apiKey: "API_KEY",
    authDomain: "URL APP",
    databaseURL: "URL DATABASE",
    projectId: "PROJECT ID",
    storageBucket: "",
    messagingSenderId: "ID"
  };

export default  {
    config
}
```
