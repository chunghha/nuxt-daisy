<script setup lang="ts">
import { useRoute } from 'vue-router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const route = useRoute()
</script>

<template>
  <div data-theme="rosepine">
    <div class="m-2">
      Current route: <code>{{ route.path }}</code>
    </div>
    <NuxtPage />
    <NuxtLayout name="custom" />
  </div>
</template>
