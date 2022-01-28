<script lang="ts" setup>
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
    @input="onInput"
    class="mb-2 rounded border py-1 px-3 outline-none transition focus:ring"
  />
</template>
