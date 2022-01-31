<script lang="ts" setup>
import EyeSlashed from "~icons/akar-icons/eye-slashed";
import EyeOpen from "~icons/akar-icons/eye-open";

const showPassword = ref(false);

const props = defineProps<{
  disabled?: boolean;
  name?: string;
  id?: string;
  placeholder?: string;
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function onInput(value: string): void {
  emit("update:modelValue", value);
}

watch(
  () => props.disabled,
  (val) => {
    if (val) showPassword.value = false;
  }
);
</script>
<template>
  <div class="mb-4 inline-flex items-stretch rounded focus-within:ring">
    <VInput
      :modelValue="modelValue"
      @update:model-value="onInput"
      required
      class="mb-0 rounded-r-none text-slate-900 focus:ring-0"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :disabled="disabled"
      :type="showPassword ? 'text' : 'password'"
    />
    <button
      type="button"
      :disabled="disabled"
      @click="showPassword = !showPassword"
      class="rounded-r bg-white text-slate-500 border border-l-0 outline-none focus:text-teal-500"
    >
      <eye-slashed v-if="showPassword" class="h-8 w-8 p-1" />
      <eye-open v-else class="h-8 w-8 p-1" />
    </button>
  </div>
</template>
