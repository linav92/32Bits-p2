import Vue from "vue";
import Router from "vue-router";



Vue.use(Router);

const routes =[
  {
    path: "/",
    component: () => import("../views/Inicio.vue"),
  },
  {
    path: "/busqueda",
    component: () => import("../views/Busqueda.vue"),
  },
  {
    path: "/ventas",
    component: () => import("../views/Ventas.vue"),
  },
  {
    path: "/total",
    component: () => import("../views/Total.vue"),
  },
]

const router = new Router({
  mode: "history",
  routes
});
  
export default router;
  