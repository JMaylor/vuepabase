<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";

const password = ref("");
const loading = ref(false);
const router = useRouter();

async function onSubmit() {
  const authStore = useAuthStore();
  if (!authStore.resetToken) return alert("no reset token provided...");
  loading.value = true;

  const { error, data } = await authStore.supabase.auth.api.updateUser(
    authStore.resetToken,
    {
      password: password.value,
    }
  );
  console.log(error, data);

  if (error) {
    alert(error.message);
  } else {
    authStore.$patch({ resetToken: null });
    alert('successfully reset password.')
    router.push("/");
  }
  loading.value = false;
}
</script>
<template>
  <div>
    <h2 class="mb- text-2xl font-bold">Reset Password</h2>
    <p class="mb-4 text-sm text-slate-500">Choose a new password below</p>
    <form class="flex w-full flex-col items-start" @submit.prevent="onSubmit">
      <VLabel for="password">Password</VLabel>
      <VPasswordInput
        :disabled="loading"
        class="mb-4 w-full"
        name="password"
        id="password"
        placeholder="Choose your password"
        v-model="password"
      />

      <VButton
        :loading="loading"
        type="submit"
        class="mb-4 w-full rounded bg-slate-900 py-2 text-sm text-slate-100"
      >
        Reset
      </VButton>
    </form>
  </div>
</template>
