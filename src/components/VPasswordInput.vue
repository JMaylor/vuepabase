<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import EyeSlashed from "~icons/akar-icons/eye-slashed";
import EyeOpen from "~icons/akar-icons/eye-open";

const showPassword = ref(false);
</script>
<template>
  <div
    class="relative mb-2 flex items-stretch rounded border focus-within:ring"
  >
    <VInput
      class="mb-0 rounded-r-none border-0 focus:ring-0"
      v-bind="$attrs"
      :type="showPassword ? 'text' : 'password'"
    />
    <button
      type="button"
      @click="showPassword = !showPassword"
      class="focus:text-teal-500 w-10 rounded-r bg-white text-slate-500 outline-none"
    >
      <eye-slashed v-if="showPassword" class="h-8 w-8 p-1" />
      <eye-open v-else class="h-8 w-8 p-1" />
      <!-- <span
        class="iconify h-8 w-8 p-1 text-slate-500"
        :class="{ hidden: showPassword }"
        data-icon="carbon:moon"
      ></span>
      <span
        class="iconify h-8 w-8 p-1 text-slate-500"
        :class="{ hidden: !showPassword }"
        data-icon="carbon:sun"
      ></span> -->
    </button>
  </div>
</template>
