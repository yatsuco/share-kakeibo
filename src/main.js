import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAxios from "vue-axios";
import axios from "axios";
import Paginate from "vuejs-paginate";

Vue.component('paginate', Paginate);
Vue.config.productionTip = false;
axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/[PROJECT_ID]/databases/(default)/documents";
Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
