<script setup lang="ts"></script>

<template>
  <div class="bg-stone-900 text-stone-200 w-full h-full p-4">
    <div
      class="w-full h-full max-w-screen-lg mx-auto flex flex-col space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
      <header class="flex flex-col items-center">
        <h1
          class="font-extrabold text-center text-transparent text-5xl bg-clip-text bg-gradient-to-r from-teal-400 to-amber-600">
          Vuepabase!
        </h1>

        <div class="flex space-x-4 mt-4">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/protected">Protected</router-link>
        </div>
      </header>
      <main class="max-w-screen-sm lg:max-w-none">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply text-teal-600;
}
</style>
