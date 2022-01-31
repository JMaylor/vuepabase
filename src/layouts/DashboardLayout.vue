<script lang="ts" setup>
import { breakpointsTailwind } from "@vueuse/core";

/* after navigation on small screens, close the nav drawer */
const breakpoints = useBreakpoints(breakpointsTailwind);
const lgAndLarger = breakpoints.greater("lg");
const open = ref(true);
const route = useRoute();
watch(route, () => {
  if (!lgAndLarger.value) open.value = false;
});
</script>

<template>
  <div class="flex h-full w-full max-w-full transition-colors">
    <NavDrawer v-model="open" />
    <div
      class="flex h-full max-h-full flex-grow max-w-full flex-col bg-zinc-100 text-zinc-900 transition-all dark:bg-zinc-900 dark:text-zinc-100"
      :class="{ 'lg:pl-64': open }"
    >
      <AppTopBar v-model="open" />
      <main class="flex-grow overflow-auto p-4">
        <router-view />
      </main>
      <AppFooter />
    </div>
  </div>
</template>
