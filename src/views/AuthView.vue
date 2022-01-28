<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";

const credentials = ref({
  email: "",
  password: "",
});

const router = useRouter();

async function signUp() {
  const { supabase } = useAuthStore();
  const { user, session, error } = await supabase.auth.signUp(
    credentials.value
  );
  if (!error) router.push("/");
  else alert(error.message);
}

async function signIn() {
  const { supabase } = useAuthStore();
  const { user, session, error } = await supabase.auth.signIn(
    credentials.value
  );
  if (!error) router.push("/");
}
</script>
<template>
  <div class="flex flex-col gap-8">
    <input
      type="email"
      v-model="credentials.email"
      placeholder="email"
      class="rounded border p-2"
    />
    <input
      type="password"
      v-model="credentials.password"
      placeholder="password"
      class="rounded border p-2"
    />
    <div class="flex justify-center gap-8">
      <button class="rounded bg-teal-700 py-1 px-3 text-white" @click="signUp">
        Sign Up
      </button>
      <button class="rounded bg-teal-700 py-1 px-3 text-white" @click="signIn">
        Sign In
      </button>
    </div>
  </div>
</template>
