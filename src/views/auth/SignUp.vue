<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
import { Ref } from "vue";
import { UserCredentials } from "@supabase/supabase-js";

const credentials: Ref<UserCredentials> = ref({
  email: "",
  password: "",
});

const router = useRouter();

const emailLoading = ref(false);
async function onSubmit() {
  emailLoading.value = true;
  const { supabase } = useAuthStore();
  const { user, error } = await supabase.auth.signUp(credentials.value);
  if (user) router.push("/");
  else if (error) {
    alert(error.message);
    emailLoading.value = false;
  }
}

const gitHubLoading = ref(false);
async function signInWithGitHub() {
  gitHubLoading.value = true;
  const { supabase } = useAuthStore();
  const { user, error } = await supabase.auth.signIn(
    { provider: "github" },
    {
      redirectTo: `${window.location.origin}/callback`,
    }
  );
  if (user) router.push("/");
  else if (error) {
    alert(error.message);
    gitHubLoading.value = false;
  }
}

const loading = computed(() => gitHubLoading.value || emailLoading.value);
</script>
<template>
  <div>
    <h2 class="mb- text-2xl font-bold">Good to have you.</h2>
    <p class="mb-4 text-sm text-slate-500">
      We just need some details from you.
    </p>
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
        placeholder="Choose a password"
        v-model="(credentials.password as string)"
      />

      <VButton :loading="loading" type="submit"> Sign Up </VButton>
    </form>
    <VButton
      :loading="gitHubLoading"
      :disabled="loading"
      type="button"
      class="flex items-center justify-center"
      @click="signInWithGitHub"
    >
      <span>Sign Up With GitHub</span><i-mdi-github class="ml-1" />
    </VButton>

    <span class="text-sm">
      Already registered?
      <router-link to="/signin" class="font-bold"
        >Sign in here!</router-link
      ></span
    >
  </div>
</template>
