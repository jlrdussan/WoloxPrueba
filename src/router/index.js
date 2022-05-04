import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: () =>
      import(/* webpackChunkName: "landing" */ "../views/Landing"),
  },
  {
    path: "/pokemon",
    name: "Pokemon",
    component: () => import(/* webpackChunkName: "pokemos" */ "../views/Pokemon"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
