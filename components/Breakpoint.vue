<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const sm = breakpoints.smaller('sm')
const md = breakpoints.between('sm', 'md')
const lg = breakpoints.between('md', 'lg')
const xl = breakpoints.between('lg', 'xl')
const xxl = breakpoints.between('xl', '2xl')
const xxxl = breakpoints['2xl']
</script>

<template>
  <div class="btn-group flex justify-center p-8">
    <button class="btn" :class="{ 'btn-warning': sm }">
      sm
    </button>
    <button class="btn" :class="{ 'btn-warning': md }">
      md
    </button>
    <button class="btn" :class="{ 'btn-warning': lg }">
      lg
    </button>
    <button class="btn" :class="{ 'btn-warning': xl }">
      xl
    </button>
    <button class="btn" :class="{ 'btn-warning': xxl }">
      xxl
    </button>
    <button class="btn" :class="{ 'btn-warning': xxxl }">
      xxxl
    </button>
  </div>
</template>
