<script setup lang="ts">
import { supabase } from "@/services/supabase";
</script>

<template>
  <pre>{{ supabase.auth.user() }}</pre>
</template>
