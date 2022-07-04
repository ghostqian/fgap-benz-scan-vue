import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const Home = r => require.ensure([], () => r(require("@/views/home.vue")), "Home");

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Home,
    },
  ]
});