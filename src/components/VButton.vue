<script lang="ts" setup>
import LoadingIcon from "~icons/ant-design/loading-outlined";
defineProps<{
  loading?: boolean;
}>();
</script>
<template>
  <button class="mb-4 w-full rounded py-2 text-sm text-slate-50">
    <slot v-if="!loading" />
    <LoadingIcon v-else class="mx-auto h-5 animate-spin" data-cy="loading" />
  </button>
</template>
