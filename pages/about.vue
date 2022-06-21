<script lang='ts'>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { defineComponent } from 'vue';

export default defineComponent({
  async setup() {
    const breakpoints = useBreakpoints(breakpointsTailwind);

    const sm = breakpoints.smaller('sm');
    const md = breakpoints.between('sm', 'md');
    const lg = breakpoints.between('md', 'lg');
    const xl = breakpoints.between('lg', 'xl');
    const xxl = breakpoints.between('xl', '2xl');
    const xxxl = breakpoints['2xl'];

    return { sm, md, lg, xl, xxl, xxxl };
  }
});
</script>

<template>
  <h1 class="text-center text-warning">about page</h1>
  <div class="btn-group flex justify-center">
    <button class="btn" :class="{ 'btn-secondary': sm }">sm</button>
    <button class="btn" :class="{ 'btn-secondary': md }">md</button>
    <button class="btn" :class="{ 'btn-secondary': lg }">lg</button>
    <button class="btn" :class="{ 'btn-secondary': xl }">xl</button>
    <button class="btn" :class="{ 'btn-secondary': xxl }">xxl</button>
    <button class="btn" :class="{ 'btn-secondary': xxxl }">xxxl</button>
  </div>
</template>
