import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "./stores/auth";
import { pinia } from "./stores";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: () => import("@/views/AuthView.vue"),
      meta: {
        requiresNoAuth: true,
      },
    },
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

const { supabase } = useAuthStore(pinia);
supabase.auth.onAuthStateChange((event, session) => {
  console.log("SUPABASE AUTH STATE CHANGE");
  console.log(event, session);
  if (event == 'SIGNED_IN') return router.push('/')
  if (event == 'SIGNED_OUT') router.push('/auth')
});

router.beforeEach((to, from) => {
  const { supabase } = useAuthStore();
  if (to.meta.requiresAuth && !supabase.auth.user()) {
    return {
      path: "/auth",
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    };
  }
  if (to.meta.requiresNoAuth && supabase.auth.user()) {
    return {
      path: "/",
    };
  }
});

export default router;
