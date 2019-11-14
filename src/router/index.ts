import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/IntroduceApp.vue")
  },
  {
    path: "/top",
    component: () => import("@/views/BaseLayout.vue"),
    children: [
      {
        path: "",
        name: "top",
        component: () => import("@/views/Top.vue")
      },
      {
        path: "book/:bookId",
        name: "bookDetail",
        component: () => import("@/views/BookDetailPage.vue")
      },
      {
        // TODO コンポーネント作成
        path: "book/:bookId/toi/:toiId",
        name: "toi",
        component: () => import("@/container/BookList")
      },
      {
        path: "favorite",
        name: "favorite",
        component: () => import("@/container/BookList")
      },
      {
        path: "account",
        name: "account",
        component: () => import("@/container/BookList")
      },
      {
        path: "search",
        name: "search",
        component: () => import("@/container/BookSearch")
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
