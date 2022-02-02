<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";
import { Ref } from "vue";
import { UserCredentials } from "@supabase/supabase-js";

const props = defineProps<{
  signUp: boolean;
  title: string;
  subtitle: string;
  emailPlaceholder: string;
  passwordPlaceholder: string;
}>();

const credentials: Ref<UserCredentials> = ref({
  email: "",
  password: "",
});

const router = useRouter();

const emailLoading = ref(false);
async function emailAuth() {
  emailLoading.value = true;
  const { supabase } = useAuthStore();
  const { user, error } = props.signUp
    ? await supabase.auth.signUp(credentials.value)
    : await supabase.auth.signIn(credentials.value);
  if (user) router.push("/");
  else if (error) {
    alert(error.message);
    emailLoading.value = false;
  }
}

const gitHubLoading = ref(false);
async function gitHubAuth() {
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

const googleLoading = ref(false);
async function googleAuth() {
  googleLoading.value = true;
  const { supabase } = useAuthStore();
  const { user, error } = await supabase.auth.signIn(
    { provider: "google" },
    {
      redirectTo: `${window.location.origin}/callback`,
    }
  );
  if (user) router.push("/");
  else if (error) {
    alert(error.message);
    googleLoading.value = false;
  }
}

const twitterLoading = ref(false);
async function twitterAuth() {
  twitterLoading.value = true;
  const { supabase } = useAuthStore();
  const { user, error } = await supabase.auth.signIn(
    { provider: "twitter" },
    {
      redirectTo: `${window.location.origin}/callback`,
    }
  );
  if (user) router.push("/");
  else if (error) {
    alert(error.message);
    twitterLoading.value = false;
  }
}

const facebookLoading = ref(false);
async function facebookAuth() {
  facebookLoading.value = true;
  const { supabase } = useAuthStore();
  const { user, error } = await supabase.auth.signIn(
    { provider: "facebook" },
    {
      redirectTo: `${window.location.origin}/callback`,
    }
  );
  if (user) router.push("/");
  else if (error) {
    alert(error.message);
    facebookLoading.value = false;
  }
}

const loading = computed(
  () =>
    gitHubLoading.value ||
    emailLoading.value ||
    googleLoading.value ||
    twitterLoading.value ||
    facebookLoading.value
);
</script>
<template>
  <div>
    <h2 class="mb- text-2xl font-bold">
      {{ title }}
    </h2>
    <p class="mb-4 text-sm text-slate-500">
      {{ subtitle }}
    </p>
    <form class="flex w-full flex-col items-start" @submit.prevent="emailAuth">
      <VLabel for="email">Email</VLabel>
      <VInput
        required
        :disabled="loading"
        class="w-full"
        name="email"
        id="email"
        type="email"
        :placeholder="emailPlaceholder"
        v-model="(credentials.email as string)"
      />
      <VLabel for="password">Password</VLabel>
      <VPasswordInput
        :disabled="loading"
        class="mb-4 w-full"
        name="password"
        id="password"
        :placeholder="passwordPlaceholder"
        v-model="(credentials.password as string)"
      />

      <router-link
        v-if="!signUp"
        to="/forgotpassword"
        class="mb-4 text-sm font-bold"
        >Forgot your password?</router-link
      >

      <VButton
        :loading="emailLoading"
        :disabled="loading"
        type="submit"
        class="bg-teal-700"
        >{{ signUp ? "Sign Up" : "Sign In" }}</VButton
      >
    </form>
    <div class="flex space-x-2">
      <VButton
        :loading="gitHubLoading"
        :disabled="loading"
        type="button"
        class="flex items-center justify-center bg-black"
        @click="gitHubAuth"
      >
        <i-mdi-github class="h-5 w-5" />
      </VButton>
      <VButton
        :loading="googleLoading"
        :disabled="loading"
        type="button"
        class="flex items-center justify-center bg-[#EA4335]"
        @click="googleAuth"
      >
        <i-mdi-google class="h-5 w-5" />
      </VButton>
      <VButton
        :loading="twitterLoading"
        :disabled="loading"
        type="button"
        class="flex items-center justify-center bg-[#1DA1F2]"
        @click="twitterAuth"
      >
        <i-mdi-twitter class="h-5 w-5" />
      </VButton>
      <VButton
        :loading="facebookLoading"
        :disabled="loading"
        type="button"
        class="flex items-center justify-center bg-[#425F9C]"
        @click="facebookAuth"
      >
        <i-mdi-facebook class="h-5 w-5" />
      </VButton>
    </div>

    <slot name="actions" />
  </div>
</template>
