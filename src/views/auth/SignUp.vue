<script lang="ts" setup></script>
<template>
  <AuthForm
    :sign-up="true"
    title="Good to have you"
    subtitle="We just need some details from you"
    email-placeholder="Enter your email"
    password-placeholder="Choose a password"
  >
    <template v-slot:actions>
      <span class="text-sm">
        Already registered?
        <router-link to="/signin" class="font-bold"
          >Sign in here!</router-link
        ></span
      ></template
    >
  </AuthForm>
</template>
