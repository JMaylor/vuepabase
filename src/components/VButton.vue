<script lang="ts" setup>
import LoadingIcon from "~icons/ant-design/loading-outlined";
defineProps<{
  loading?: boolean;
}>();
</script>
<template>
  <button class="mb-4 w-full rounded bg-slate-900 py-2 text-sm text-slate-100">
    <slot v-if="!loading" />
    <LoadingIcon v-else class=" h-5 mx-auto animate-spin" />
  </button>
</template>
