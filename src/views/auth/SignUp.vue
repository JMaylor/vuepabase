<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";

const credentials = ref({
  email: "",
  password: "",
});

const router = useRouter();

async function onSubmit() {
  console.log("submitting...");

  const { supabase } = useAuthStore();
  const { user, session, error } = await supabase.auth.signUp(
    credentials.value
  );
  console.log(user, session, error);

  if (user) {
    router.push("/");
  } else {
    if (error) alert(error.message);
  }
}
</script>
<template>
  <AuthForm v-model="credentials" @submit.prevent="onSubmit">
    <template v-slot:title>Come on in</template>
    <template v-slot:subtitle>Please enter your details</template>
    <template v-slot:submitButton>Sign Up</template>
    <template v-slot:bottomLink
      ><router-link to="/signin" class="mb-4 text-sm"
        >Have an account? <strong>Sign in here!</strong></router-link
      ></template
    >
    <span class="mb-4 text-sm font-bold">Choose a strong password!</span>
  </AuthForm>
</template>
