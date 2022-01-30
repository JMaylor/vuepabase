<template>
  <component
    :is="component"
    v-wave
    class="h-10 w-10 rounded-full focus:outline-none focus-visible:ring focus-visible:ring-teal-500"
  >
    <span
      v-if="icon"
      class="iconify h-full w-full p-2"
      :data-icon="icon"
    ></span>
    <slot />
  </component>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    icon?: string;
    component?: string;
  }>(),
  {
    component: "button",
  }
);
</script>
