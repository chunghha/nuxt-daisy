<script setup lang="ts">
import { useCounterStore } from '../store/counter'

const counter = useCounterStore()
</script>

<template>
  <div
    class="hero min-h-screen"
    style="background-image: url(https://api.lorem.space/image/shoes?w=1000&h=800)"
  >
    <div class="bg-opacity-45 hero-overlay" />
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 font-poppins text-5xl font-bold">Hello there</h1>
        <p class="mb-5 font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <button class="btn-primary btn font-poppins">Get Started</button>
      </div>
    </div>
  </div>
  <div class="m-2 text-center font-poppins text-neutral-content">
    <button class="btn-sm btn-circle btn mr-2 text-accent" @click="counter.decrease">-</button>
    Counter: {{ counter.count }}
    <button class="btn-sm btn-circle btn ml-2 text-accent" @click="counter.increase">+</button>
  </div>
</template>
