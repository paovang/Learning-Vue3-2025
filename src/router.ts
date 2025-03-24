import { createRouter, createWebHistory } from "vue-router";
import Banner from "./views/Banner.vue";
import LoginPage from "./views/Login.vue";
import UserPage from "./views/User.vue";
import { authGuard } from "./common/guard/auth.guard";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      component: () => import("./components/layouts/Layout.vue"),
      children: [
        { path: "banner", name: "banner", component: Banner },
        { path: "login", name: "login", component: LoginPage },
        { path: "user", name: "user", component: UserPage },
      ],
    },
  ],
});

authGuard(router);

export default router;
