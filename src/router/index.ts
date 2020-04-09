import Vue from "vue";
import VueRouter from "vue-router";
import VueAnalytics from "vue-analytics";
const Hotjar = require("vue-hotjar");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/IntroducePage.vue")
  },
  {
    path: "/top",
    component: () => import("@/views/layout/BaseLayout.vue"),
    children: [
      {
        path: "",
        name: "top",
        component: () => import("@/views/TopPage.vue")
      },
      {
        path: "book/:bookId",
        name: "bookDetail",
        component: () => import("@/views/BookDetailPage.vue"),
        props: true
      },
      {
        path: "book/:bookId/answer/:answerHeadId",
        name: "answerDetail",
        component: () => import("@/views/AnswerDetailPage.vue"),
        props: true
      },
      {
        path: "book/:bookId/answer/:answerHeadId/step/:stepNo",
        name: "step",
        component: () => import("@/views/QuestionPage.vue"),
        props: true
      },
      {
        path: "favorite",
        name: "favorite",
        component: () => import("@/views/FavoritePage.vue")
      },
      {
        path: "account",
        name: "account",
        component: () => import("@/views/AccountPage.vue"),
        props: true
      },
      {
        path: "search",
        name: "search",
        component: () => import("@/views/BookSearchPage.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GA_ID,
  router
});

Vue.use(Hotjar, {
  id: process.env.VUE_APP_HOTJAR_ID,
  isProduction: true
});

export default router;
