<script lang="ts" setup>
import { supabase } from "@/services/supabase";

provide("supabase", supabase);
</script>

<template>
  <router-view />
</template>

<style>
html,
body,
#app {
  height: 100%;
  min-height: 100%;
  @apply bg-slate-100;
}
</style>
