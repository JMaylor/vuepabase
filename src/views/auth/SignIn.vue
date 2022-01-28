<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";

const credentials = ref({
  email: "",
  password: "",
});

const router = useRouter();

async function onSubmit() {
  const { supabase } = useAuthStore();
  const { user, error } = await supabase.auth.signIn(credentials.value);
  if (user) {
    router.push("/");
  } else {
    if (error) alert(error.message);
  }
}
</script>
<template>
  <AuthForm v-model="credentials" @submit.prevent="onSubmit">
    <template v-slot:title>Welcome back</template>
    <template v-slot:subtitle>Please enter your details</template>
    <template v-slot:submitButton>Sign In</template>
    <template v-slot:bottomLink
      ><router-link to="/signup" class="mb-4 text-sm"
        >Don't have an account? <strong>Sign up here!</strong></router-link
      ></template
    >
    <router-link to="/" class="mb-4 text-sm font-bold"
      >Forgot your password?</router-link
    >
  </AuthForm>
</template>
