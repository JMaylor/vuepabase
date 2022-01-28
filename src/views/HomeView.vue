<script setup lang="ts">
import { supabase } from "@/services/supabase";

async function signOut() {
  const { error } = await supabase.auth.signOut();
  console.log(error);
}
</script>

<template>
  <button @click="signOut" class="rounded bg-teal-700 py-1 px-3 text-white">
    Sign Out
  </button>
  <pre>{{ supabase }}</pre>
</template>
