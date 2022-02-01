<script lang="ts" setup></script>
<template>
  <AuthForm
    :sign-up="false"
    title="Welcome back"
    subtitle="Please enter your details"
    email-placeholder="Enter your email"
    password-placeholder="Enter your password"
  >
    <template v-slot:actions
      ><span class="text-sm">
        Don't have an account?
        <router-link to="/signup" class="font-bold"
          >Sign up here!</router-link
        ></span
      ></template
    >
  </AuthForm>
</template>
