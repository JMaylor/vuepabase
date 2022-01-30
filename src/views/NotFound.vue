<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
const { supabase } = useAuthStore();

const reRoute = computed(() => {
  if (supabase.auth.user())
    return {
      to: "/",
      text: "Go Home",
    };
  return {
    to: "/signin",
    text: "Sign In",
  };
});
</script>
<template>
  <div class="self-center text-xl font-medium mb-4">404 - Page not found</div>
  <router-link :to="reRoute.to" class="self-center">{{
    reRoute.text
  }}</router-link>
</template>
