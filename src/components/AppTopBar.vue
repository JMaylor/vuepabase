<template>
  <header
    class="sticky top-0 z-30 flex items-center justify-between p-3 shadow"
  >
    <div class="flex items-center">
      <v-icon-button @click="$emit('update:modelValue', !modelValue)">
        <i-carbon-menu class="h-6 w-6" />
      </v-icon-button>
    </div>
    <div class="flex items-center space-x-4">
      <v-icon-button @click="toggleDark()">
        <i-carbon-sun class="h-6 w-6 dark:hidden" />
        <i-carbon-moon class="hidden h-6 w-6 dark:block" />
      </v-icon-button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { Ref } from "vue";
import { isDarkKey } from "@/symbols";

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
