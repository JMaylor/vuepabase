<script lang="ts" setup>
import { supabase } from "@/services/supabase";

provide("supabase", supabase);
</script>

<template>
  <main class="h-full p-8"><router-view /></main>
</template>
