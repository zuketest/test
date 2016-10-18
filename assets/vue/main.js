import Vue from 'vue';
import App from "./component/app.vue";
import gg from "./component/gg.vue";
import home from "./component/home.vue";
import parts from "./component/parts.vue";
import VueRouter　from "vue-router";
import Resource from "vue-resource";
import VueAsyncData from 'vue-async-data';
Vue.use(VueAsyncData);
Vue.use(Resource);
Vue.use(VueRouter);

const router = new VueRouter();
const root = Vue.extend();


router.map({
  '/': {
    component: home
  },
  '/about': {
    component: gg
  }
});

const Test = Vue.extend(App);
router.start(Test, '#appRoot');


