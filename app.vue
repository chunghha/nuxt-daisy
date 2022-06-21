<script lang='ts'>
import "@fontsource/inter";
import "@fontsource/poppins";
import "@fontsource/space-mono";
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();

    return { route };
  }
})
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
