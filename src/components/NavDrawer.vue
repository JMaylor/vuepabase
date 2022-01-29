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
    enter-from-class="transform -translate-x-full"
    leave-to-class="transform -translate-x-full"
  >
    <div
      v-if="modelValue"
      ref="navContainer"
      class="nav-container fixed z-50 flex h-full w-64 flex-col justify-between bg-zinc-900 bg-cover p-4 text-zinc-100 shadow-lg transition-transform dark:shadow-none"
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
        <nav class="flex flex-col space-y-2 pt-4">
          <!-- <router-link
            v-for="{ text, to, icon } in navLinks"
            v-wave
            class="nav-button"
            exact-active-class="bg-teal-800 text-zinc-100"
            :to="to"
          >
            <span class="iconify w-6 h-6 mr-2" :data-icon="icon"></span>
            <span>{{ text }}</span>
          </router-link> -->
        </nav>
      </div>
      <!-- <div class="flex flex-col">
        <a
          v-wave
          class="nav-button"
          href="https://github.com/JMaylor/zephyr-dashboard"
          target="_blank"
        >
          <span
            class="iconify w-6 h-6 mr-2"
            data-icon="heroicons-outline:external-link"
          ></span>
          <span>GitHub</span>
        </a>
        <router-link
          v-wave
          class="nav-button"
          to="/"
        >
          <span
            class="iconify w-6 h-6 mr-2"
            data-icon="heroicons-outline:logout"
          ></span>
          <span>Sign Out</span>
        </router-link>
      </div> -->
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { breakpointsTailwind } from "@vueuse/core";

defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);
const navContainer = ref(null);

// TODO - switch focus to nav drawer when it is opened with keyboard ?

const breakpoints = useBreakpoints(breakpointsTailwind);
const lgAndLarger = breakpoints.greater("lg");
onClickOutside(navContainer, () => {
  if (!lgAndLarger.value) emit("update:modelValue", false);
});

const navLinks: any[] = [
  // {
  //   text: "Home",
  //   to: "/dashboard",
  //   icon: "heroicons-outline:home",
  // },
  // {
  //   text: "About",
  //   to: "/dashboard/about",
  //   icon: "heroicons-outline:information-circle",
  // },
  // {
  //   text: "Form",
  //   to: "/dashboard/form",
  //   icon: "heroicons-outline:clipboard-list",
  // },
  // {
  //   text: "Calendar",
  //   to: "/dashboard/calendar",
  //   icon: "heroicons-outline:calendar",
  // },
  // {
  //   text: "Table",
  //   to: "/dashboard/table",
  //   icon: "heroicons-outline:table",
  // },
  // {
  //   text: "Profile",
  //   to: "/dashboard/profile",
  //   icon: "heroicons-outline:user",
  // },
];
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
