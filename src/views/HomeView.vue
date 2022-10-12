<script setup lang="ts">
import { supabaseSymbol } from "@/services/supabase";
import type { Provider, SupabaseClient } from "@supabase/supabase-js";

const supabase = inject(supabaseSymbol) as SupabaseClient;
const authProviders: Array<Provider> = ["github", "google", "twitter"];
function gitHubAuth(provider: Provider) {
  supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.location.origin}/callback`,
    },
  });
}
</script>

<template>
  <page-title>Home</page-title>
  <p class="mb-4">
    This is the home page, where you can login with any of a few configured auth
    providers. You won't be able to visit this page if you're logged in, and
    instead you'll be redirected to the Protected page.
  </p>
  <div class="space-x-4">
    <v-button v-for="provider in authProviders" :key="provider" type="button" @click="gitHubAuth(provider)">
      {{ provider }}
    </v-button>
  </div>
</template>
