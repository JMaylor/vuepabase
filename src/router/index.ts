import { createRouter, createWebHistory } from "vue-router";
import { supabase } from "../services/supabase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        requiresAuth: false,
      },
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/callback",
      name: "callback",
      component: () => import("../views/CallbackView.vue"),
    },
    {
      path: "/protected",
      name: "protected",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../views/ProtectedView.vue"),
    },
  ],
});

router.beforeEach(async (to) => {
  const { data: sessionData } = await supabase.auth.getSession();
  const { data: userData } = await supabase.auth.getUser();
  const hasAuth = Boolean(sessionData.session) && Boolean(userData.user);
  if (to.meta.requiresAuth && !hasAuth) return "/";
  if (to.meta.requiresAuth === false && hasAuth) return "/protected";
});

export default router;
