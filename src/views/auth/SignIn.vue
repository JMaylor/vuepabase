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
async function signInWithEmail() {
  emailLoading.value = true;
  const { supabase } = useAuthStore();
  const { user, error } = await supabase.auth.signIn(credentials.value);
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
    <h2 class="mb- text-2xl font-bold">Welcome back</h2>
    <p class="mb-4 text-sm text-slate-500">Please enter your details</p>
    <form
      class="flex w-full flex-col items-start"
      @submit.prevent="signInWithEmail"
    >
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
        data-cy="email"
      />
      <VLabel for="password">Password</VLabel>
      <VPasswordInput
        :disabled="loading"
        class="w-full"
        name="password"
        id="password"
        placeholder="Enter your password"
        v-model="(credentials.password as string)"
        data-cy="password"
      />
      <router-link to="/forgotpassword" class="mb-4 text-sm font-bold"
        >Forgot your password?</router-link
      >

      <VButton
        :loading="emailLoading"
        :disabled="loading"
        type="submit"
        data-cy="submit"
      >
        Sign In
      </VButton>
    </form>
    <VButton
      :loading="gitHubLoading"
      :disabled="loading"
      type="button"
      class="flex items-center justify-center"
      @click="signInWithGitHub"
    >
      <span>Sign In With GitHub</span><i-mdi-github class="ml-1" />
    </VButton>

    <span class="text-sm">
      Don't have an account?
      <router-link to="/signup" class="font-bold"
        >Sign up here!</router-link
      ></span
    >
  </div>
</template>
