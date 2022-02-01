<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const { supabase } = useAuthStore();
if (supabase.auth.user()) router.push("/");
</script>
<template>
  <span class="self-center text-center text-2xl font-medium"
    >Logging in...</span
  >
</template>
