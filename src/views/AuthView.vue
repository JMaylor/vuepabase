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
  <div class="flex flex-col p-8 gap-8 border rounded">
    <input
      type="email"
      v-model="credentials.email"
      placeholder="email"
      class="p-2 rounded border"
    />
    <input
      type="password"
      v-model="credentials.password"
      placeholder="password"
      class="p-2 rounded border"
    />
    <div class="flex justify-center gap-8">
      <button class="bg-teal-700 text-white py-1 px-3 rounded" @click="signUp">
        Sign Up
      </button>
      <button class="bg-teal-700 text-white py-1 px-3 rounded" @click="signIn">
        Sign In
      </button>
    </div>
  </div>
</template>
