<script setup lang="ts">
import { supabase } from "@/services/supabase";
</script>

<template>
  <h1 class="text-3xl font-medium">Home</h1>
  <pre>{{ supabase.auth.user() }}</pre>
</template>
