import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import barrage from "vue2-barrage";
import VueSocketIO from "vue-socket.io";
import "normalize.css";

Vue.config.productionTip = false;

Vue.use(barrage);
Vue.use(
  new VueSocketIO({
    debug: process.env.NODE_ENV === "development",
    connection: process.env.VUE_APP_WS_URL,
    options: { path: process.env.VUE_APP_WS_PATH }
  })
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
