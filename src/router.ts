import { createRouter, createWebHistory } from "vue-router";
import Banner from "./views/Banner.vue";
import LoginPage from "./views/Login.vue";
import UserPage from "./views/User.vue";
import SupplierPage from "./views/Supplier.vue";
import CreateSupplierPage from "./views/components/Supplier/Form.create.vue";
import UpdateSupplierPage from "./views/components/Supplier/Form.update.vue";
import { authGuard } from "./common/guard/auth.guard";
import MyBanner from "./views/MyBanner.vue";
import CreateMyBanner from "./views/components/Banner/Form.create.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      component: () => import("./components/layouts/Layout.vue"),
      children: [
        { path: "banner", name: "banner", component: Banner },
        { path: "user", name: "user", component: UserPage },
        {
          path: "supplier",
          name: "supplier",
          component: SupplierPage,
        },
        {
          path: "create/supplier",
          name: "create.supplier",
          component: CreateSupplierPage,
        },
        {
          path: "create/supplier/:id",
          name: "update.supplier",
          component: UpdateSupplierPage,
        },
        {
          path: "my-banner",
          name: "my.banner",
          component: MyBanner,
        },
        {
          path: "create/my-banner",
          name: "create.my.banner",
          component: CreateMyBanner,
        },
      ],
    },
    {
      path: "/admin/login",
      name: "login",
      component: LoginPage,
    },
  ],
});

authGuard(router);

export default router;
