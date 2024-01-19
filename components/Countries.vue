<!-- eslint-disable no-undef -->
<script setup lang="ts">
import type { Country } from '../models/country'

const { data, error } = await useFetch('https://restcountries.com/v3.1/all')
const fetchError = useState('error', () => error.value?.toString())
</script>

<template>
  <div v-if="data">
    <div class="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div v-for="country in data as unknown as Country[]" :key="country.name.official">
        <div class="flex flex-grow items-stretch h-full">
          <div
            class="w-84 card card-compact bg-base-100 shadow-xl transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            <figure><img :src="country.flags.svg" :alt="country.name.official"></figure>
            <div class="card-body">
              <h2 class="card-title font-poppins text-secondary">
                {{ country.name.official }}
              </h2>
              <p class="font-inter text-xl text-warning">
                {{ country.capital?.[0] ?? '' }}
              </p>
              <div v-if="country.population > 0">
                <p class="font-inter text-lg text-info">
                  {{ (country.population as number).toLocaleString() }}
                </p>
              </div>
              <div class="card-actions justify-end">
                <button class="btn-neutral btn font-inter rounded-full px-8 shadow-md">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="error">
    Error fetching data: {{ fetchError }}
  </div>
  <div v-else>
    Loading...
  </div>
</template>
