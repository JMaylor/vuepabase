<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const { supabase } = useAuthStore();

onMounted(() => {
  if (supabase.auth.user()) {
    console.log(
      "arrived on callback page with an existing user, so going home"
    );
    setTimeout(() => {
      router.push("/");
    }, 0);
  }
});
</script>
<template>
  <span class="self-center text-center text-2xl font-medium"
    >Logging in...</span
  >
</template>
