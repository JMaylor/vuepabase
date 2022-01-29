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
      name: "home",
      component: () => import("@/views/HomeView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

const { supabase } = useAuthStore(pinia);
supabase.auth.onAuthStateChange((event) => {
  console.log(event);
  if (event == "SIGNED_OUT") return router.push("/signin");
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  if (to.hash.includes("type=recovery") && to.name != "resetPassword") {
    // parse the hash
    const hashDictionary = {} as any;

    // first remove the actual hash
    const hash = to.hash.replace("#", "");
    // split into key,values
    hash.split("&").forEach((item) => {
      // split 'key=value' into [key, value]
      const [key, value] = item.split("=");
      // add to results
      hashDictionary[key] = value;
    });

    authStore.$patch({ resetToken: hashDictionary.access_token });
    return { name: `resetPassword`, hash: to.hash };
  }
  if (to.hash.includes("type=recovery") && to.name == "resetPassword")
    return true;
  if (to.meta.requiresAuth && !authStore.supabase.auth.user()) {
    return {
      path: "/signin",
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    };
  }
  if (to.meta.requiresNoAuth && authStore.supabase.auth.user()) {
    return {
      path: "/",
    };
  }
});

export default router;
