<script lang="ts" setup>
import { supabaseSymbol } from "@/services/supabase";
import type { SupabaseClient } from "@supabase/supabase-js";

const supabase = inject(supabaseSymbol) as SupabaseClient;
function signOut() {
  supabase.auth.signOut();
}
</script>
<template>
  <page-title>Protected</page-title>
  <p class="mb-4">
    This is the protected page, which shows your email address just below. You
    won't be able to visit this page if you're not logged in, and instead you'll
    be redirected to the Home page.
  </p>
  <suspense>
    <template #fallback> Loading... </template>
    <user-info class="my-4" />
  </suspense>
  <v-button type="button" @click="signOut">Sign Out</v-button>
</template>
