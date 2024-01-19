<script setup lang="ts">
import { useNow } from '@vueuse/core'
import { useThemeStore } from '../store/theme'

const now = useNow()
const themeStore = useThemeStore()
</script>

<template>
  <div class="navbar mb-2 bg-neutral shadow-lg">
    <div class="navbar-start">
      <div class="dropdown z-[1000]">
        <label tabindex="0" class="btn-ghost btn-circle btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu-compact dropdown-content menu rounded-box mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <NuxtLink to="/" class="n-link-base font-poppins">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="n-link-base font-poppins">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/country" class="n-link-base font-poppins">
              Country
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn-ghost btn font-poppins text-xl normal-case">daisyUI</a>
    </div>
    <div class="navbar-end">
      <button class="btn-ghost btn-circle btn" @click="themeStore.toggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24px"
          height="24px"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
      <button class="btn-shape btn-ghost btn ml-8 mr-4">
        {{ now.toLocaleTimeString() }}
      </button>
    </div>
  </div>
</template>
