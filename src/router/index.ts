import Vue from "vue";
import VueRouter from "vue-router";
import IntroduceApp from "@/views/IntroduceApp.vue";
import BaseLayout from "@/views/BaseLayout.vue";
import BookList from "@/container/BookList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: IntroduceApp
  },
  {
    path: "/top",
    component: BaseLayout,
    children: [
      {
        path: "/",
        name: "book",
        component: BookList
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
