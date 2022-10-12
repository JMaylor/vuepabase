<script lang="ts" setup>
import { supabaseSymbol } from "@/services/supabase";
import type { SupabaseClient } from "@supabase/supabase-js";

const supabase = inject(supabaseSymbol) as SupabaseClient;
const user = await supabase.auth.getUser();
</script>
<template>
  <p>
    Hey there,
    <span class="text-rose-400">{{ user.data.user?.user_metadata.email }}</span>
  </p>
</template>
