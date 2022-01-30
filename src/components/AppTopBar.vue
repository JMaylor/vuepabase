<template>
  <header
    class="sticky top-0 z-30 flex items-center justify-between p-4 backdrop-blur"
  >
    <div class="flex items-center space-x-4">
      <v-icon-button
        @click="$emit('update:modelValue', !modelValue)"
        icon="heroicons-outline:menu"
      />
    </div>
    <div class="flex items-center space-x-4">
      <v-icon-button @click="toggleDark()">
        <span
          class="iconify h-full w-full p-2 dark:hidden"
          data-icon="heroicons-outline:sun"
        ></span>
        <span
          class="iconify hidden h-full w-full p-2 dark:block"
          data-icon="heroicons-outline:moon"
        ></span>
      </v-icon-button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { Ref } from "vue";
import { isDarkKey } from "@/main";

/* modelValue here refers to whether or not to show side nav drawer */
defineProps<{
  modelValue: boolean;
}>();

defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const isDark = inject(isDarkKey) as Ref<boolean>;
const toggleDark = useToggle(isDark);
</script>
