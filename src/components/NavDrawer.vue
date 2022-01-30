<template>
  <!-- background blur on smaller screens -->
  <transition enter-from-class="opacity-0" leave-to-class="opacity-0">
    <div
      class="absolute z-40 h-full w-full bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter transition-opacity lg:hidden"
      v-if="modelValue"
    ></div>
  </transition>

  <!-- nav drawer -->
  <transition
    enter-from-class="-translate-x-full"
    leave-to-class="-translate-x-full"
  >
    <div
      v-if="modelValue"
      ref="navContainer"
      class="nav-container fixed z-50 flex h-full max-h-full w-64 flex-col justify-between divide-y overflow-y-auto bg-zinc-900 bg-cover p-4 text-zinc-100 shadow-lg transition-transform dark:shadow-none"
    >
      <div class="divide-y divide-zinc-100">
        <a
          v-wave
          href="https://maylor.io"
          target="_blank"
          class="nav-button mb-4"
        >
          maylor.io
          <i-ci-external-link class="ml-2" />
        </a>
        <nav class="flex flex-col space-y-2 py-4">
          <router-link
            v-for="{ text, to, icon } in navLinks"
            v-wave
            class="nav-button"
            exact-active-class="bg-teal-800 text-zinc-100"
            :to="to"
          >
            <span class="iconify mr-2 h-6 w-6" :data-icon="icon"></span>
            <span>{{ text }}</span>
          </router-link>
        </nav>
      </div>
      <div class="flex flex-shrink-0 flex-col">
        <a
          v-wave
          class="nav-button"
          href="https://github.com/JMaylor/vue3-supabase-ts-tailwind-dashboard"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span
            class="iconify mr-2 h-6 w-6"
            data-icon="heroicons-outline:external-link"
          ></span>
          <span>GitHub</span>
        </a>
        <button @click="signOut" v-wave class="nav-button">
          <span
            class="iconify mr-2 h-6 w-6"
            data-icon="heroicons-outline:logout"
          ></span>
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { breakpointsTailwind } from "@vueuse/core";
import { supabase } from "@/services/supabase";

defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

/* close the nav whenever clicked outside on small screens */
const breakpoints = useBreakpoints(breakpointsTailwind);
const lgAndLarger = breakpoints.greater("lg");
const navContainer = ref(null);
onClickOutside(navContainer, () => {
  if (!lgAndLarger.value) emit("update:modelValue", false);
});

/* main navigation links for side drawer */
const navLinks = [
  {
    text: "Home",
    to: "/",
    icon: "heroicons-outline:home",
  },
  {
    text: "Profile",
    to: "/profile",
    icon: "heroicons-outline:user",
  },
];

async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) alert(error);
}
</script>

<style scoped>
.nav-container {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://images.unsplash.com/photo-1632213702844-1e0615781374?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80");
}

.nav-button {
  @apply flex items-center rounded p-4 transition-colors focus:outline-none focus:ring-1 focus:ring-teal-500;
}
</style>
