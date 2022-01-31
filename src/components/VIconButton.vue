<template>
  <component
    :is="component"
    v-wave
    class="rounded-full focus:outline-none focus-visible:ring focus-visible:ring-teal-500 p-1"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    component?: string;
  }>(),
  {
    component: "button",
  }
);
</script>
