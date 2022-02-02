<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";

const email = ref("");
const loading = ref(false);
async function onSubmit() {
  loading.value = true;
  const { supabase } = useAuthStore();
  const { data, error } = await supabase.auth.api.resetPasswordForEmail(
    email.value,
    {
      redirectTo: `${window.location.origin}/resetpassword`,
    }
  );
  if (data) {
    alert("please follow the link in your email");
  } else if (error) {
    alert(error.message);
  }
  loading.value = false;
}
</script>
<template>
  <div>
    <h2 class="mb- text-2xl font-bold">Lost your password?</h2>
    <p class="mb-4 text-sm text-slate-500">Let's sort that for you</p>
    <form class="flex w-full flex-col items-start" @submit.prevent="onSubmit">
      <VLabel for="email">Email</VLabel>
      <VInput
        required
        :disabled="loading"
        class="w-full"
        name="email"
        id="email"
        type="email"
        placeholder="Enter your email"
        v-model="email"
      />

      <VButton :loading="loading" type="submit" class="bg-teal-700"> Reset </VButton>
    </form>

    <span class="text-sm">
      <router-link to="/signup" class="font-bold">Sign up</router-link><br />
      <router-link to="/signin" class="font-bold">Sign in</router-link>
    </span>
  </div>
</template>
