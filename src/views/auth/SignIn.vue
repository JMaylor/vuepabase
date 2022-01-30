<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
import { Ref } from "vue";
import { UserCredentials } from "@supabase/supabase-js";

const credentials: Ref<UserCredentials> = ref({
  email: "",
  password: "",
});

const router = useRouter();

const loading = ref(false);

async function onSubmit() {
  loading.value = true;

  const { supabase } = useAuthStore();
  const { user, error } = await supabase.auth.signIn(credentials.value);
  if (user) router.push("/");
  else if (error) {
    alert(error.message);
    loading.value = false;
  }
}
</script>
<template>
  <div>
    <h2 class="mb- text-2xl font-bold">Welcome back</h2>
    <p class="mb-4 text-sm text-slate-500">Please enter your details</p>
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
        v-model="(credentials.email as string)"
      />
      <VLabel for="password">Password</VLabel>
      <VPasswordInput
        :disabled="loading"
        class="mb-4 w-full"
        name="password"
        id="password"
        placeholder="Enter your password"
        v-model="(credentials.password as string)"
      />
      <router-link to="/forgotpassword" class="mb-4 text-sm font-bold"
        >Forgot your password?</router-link
      >

      <VButton
        :loading="loading"
        type="submit"
        class="mb-4 w-full rounded bg-slate-900 py-2 text-sm text-slate-100"
      >
        Sign In
      </VButton>
    </form>

    <span class="text-sm">
      Don't have an account?
      <router-link to="/signup" class="font-bold"
        >Sign up here!</router-link
      ></span
    >
  </div>
</template>
