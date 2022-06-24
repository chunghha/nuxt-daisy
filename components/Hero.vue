<script setup lang='ts'>
import { useCounterStore } from '../store/counter';

const counter = useCounterStore();

</script>

<template>
  <div class="hero min-h-screen" style="background-image: url(https://api.lorem.space/image/shoes?w=1000&h=800);">
    <div class="hero-overlay bg-opacity-45"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="font-bold font-poppins mb-5 text-5xl">Hello there</h1>
        <p class="font-inter mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.</p>
        <button class="btn btn-primary font-poppins">Get Started</button>
      </div>
    </div>
  </div>
  <div class="font-poppins m-2 text-center text-neutral-content">
    <button class="mr-2 btn btn-circle btn-sm text-accent" @click="counter.decrease">-</button>
    Counter: {{ counter.count }}
    <button class="ml-2 btn btn-circle btn-sm text-accent" @click="counter.increase">+</button>
  </div>
</template>

