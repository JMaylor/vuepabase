import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "./stores/auth";
import { pinia } from "./stores";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/signin",
      component: () => import("@/layouts/AuthLayout.vue"),
      meta: {
        requiresNoAuth: true,
      },
      children: [
        {
          path: "/signin",
          name: "signIn",
          component: () => import("@/views/auth/SignIn.vue"),
        },
        {
          path: "/signup",
          name: "signUp",
          component: () => import("@/views/auth/SignUp.vue"),
        },
        {
          path: "/forgotpassword",
          name: "forgotPassword",
          component: () => import("@/views/auth/ForgotPassword.vue"),
        },
      ],
    },
    {
      path: "/resetpassword",
      component: () => import("@/layouts/AuthLayout.vue"),
      children: [
        {
          path: "/resetpassword",
          name: "resetPassword",
          component: () => import("@/views/auth/ResetPassword.vue"),
          beforeEnter: (to) => {
            // only allow navigation to reset password
            // if we actually clicked a proper reset password link
            // which provides the type=recovery hash key
            if (!to.hash.includes("type=recovery")) {
              const { supabase } = useAuthStore();
              if (supabase.auth.user()) return "/";
              return "/signin";
            }
          },
        },
        {
          path: "/:pathMatch(.*)*",
          name: "NotFound",
          component: () => import("@/views/NotFound.vue"),
        },
      ],
    },

    {
      path: "/",
      component: () => import("@/layouts/DashboardLayout.vue"),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/views/HomeView.vue"),
        },
      ],
    },
  ],
});

const { supabase } = useAuthStore(pinia);
supabase.auth.onAuthStateChange((event) => {
  console.log(event);
  if (event == "SIGNED_OUT") return router.push("/signin");
});

router.beforeEach((to) => {
  const { supabase } = useAuthStore();

  if (to.meta.requiresAuth && !supabase.auth.user()) {
    return {
      path: "/signin",
    };
  }
  if (to.meta.requiresNoAuth && supabase.auth.user()) {
    return {
      path: "/",
    };
  }
});

export default router;
