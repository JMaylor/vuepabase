<script lang="ts" setup>
defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function onInput(event: Event): void {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>
<template>
  <input
    :value="modelValue"
    @input="onInput"
    class="mb-2 rounded border py-1 px-3 text-slate-900 outline-none transition focus:ring"
  />
</template>
