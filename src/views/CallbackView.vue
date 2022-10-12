<script lang="ts" setup>
import { supabaseSymbol } from "@/services/supabase";
import type { SupabaseClient } from "@supabase/supabase-js";

const supabase = inject(supabaseSymbol) as SupabaseClient;
const router = useRouter();

onMounted(async () => {
  const { data } = await supabase.auth.getUser();
  if (data.user) router.push("/protected");
  else router.push("/");
});
</script>
<template>
  <page-title>Callback...</page-title>
</template>
