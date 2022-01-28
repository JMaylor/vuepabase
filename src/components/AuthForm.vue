<script lang="ts" setup>
interface Credentials {
  email: string;
  password: string;
}

defineProps<{
  modelValue: Credentials;
}>();
</script>
<template>
  <div class="">
    <h1 class="mb-2 text-4xl font-bold">
      <slot name="title">Welcome back</slot>
    </h1>
    <p class="mb-8 text-sm text-slate-500">
      <slot name="subtitle">Please enter your details</slot>
    </p>
    <form
      class="flex w-full flex-col items-start"
      @submit.prevent="$emit('submit')"
    >
      <VLabel for="email">Email</VLabel>
      <VInput
        class="w-full"
        name="email"
        id="email"
        type="email"
        placeholder="Enter your email"
        v-model="modelValue.email"
      />
      <VLabel for="password">Password</VLabel>
      <VPasswordInput
        class="mb-4 w-full"
        name="password"
        id="password"
        placeholder="Enter your password"
        v-model="modelValue.password"
      />
      <slot></slot>

      <button
        type="submit"
        class="mb-4 w-full rounded bg-slate-900 py-2 text-sm text-slate-100"
      >
        <slot name="submitButton"></slot>
      </button>
    </form>
    <slot name="bottomLink">
      <router-link to="/signin" class="mb-4 text-sm"
        >Have an account? <strong>Sign in here!</strong></router-link
      >
    </slot>
  </div>
</template>
