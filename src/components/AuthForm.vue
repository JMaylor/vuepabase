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

const loading = computed(() => gitHubLoading.value || emailLoading.value);
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

      <VButton :loading="emailLoading" :disabled="loading" type="submit">{{
        signUp ? "Sign Up" : "Sign In"
      }}</VButton>
    </form>
    <VButton
      :loading="gitHubLoading"
      :disabled="loading"
      type="button"
      class="flex items-center justify-center"
      @click="gitHubAuth"
    >
      <span>Sign In With GitHub</span><i-mdi-github class="ml-1" />
    </VButton>

    <slot name="actions" />
  </div>
</template>
