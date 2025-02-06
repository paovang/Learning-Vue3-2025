import { createRouter, createWebHistory } from "vue-router";
import Test from "./views/Test.vue";
import LoginPage from "./views/Login.vue";
import { authGuard } from "./common/guard/auth.guard";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      children: [
        { path: "test", name: "test", component: Test },
        { path: "login", name: "login", component: LoginPage },
      ],
    },
  ],
});

authGuard(router);

export default router;
