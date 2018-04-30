# vue-firebase-auth2

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Learn from Tutorial

- [Authenticating a Vue JS Application With Firebase UI](https://medium.com/dailyjs/authenticating-a-vue-js-application-with-firebase-ui-8870a3a5cff8)

> forebaseConfig.js

```js
export const config = {
    apiKey: "API_KEY",
    authDomain: "URL APP",
    databaseURL: "URL DATABASE",
    projectId: "PROJECT ID",
    storageBucket: "",
    messagingSenderId: "ID"
  };
```