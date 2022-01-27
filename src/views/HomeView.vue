<script setup lang="ts">
import { supabase } from "@/services/supabase";

const router = useRouter();

async function signOut() {
  const { error } = await supabase.auth.signOut();
  console.log(error);
  router.push("/auth");
}
</script>

<template>
  <button @click="signOut" class="bg-teal-700 text-white py-1 px-3 rounded">
    Sign Out
  </button>
  <pre>{{ supabase }}</pre>
</template>
