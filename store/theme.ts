import { defineStore } from 'pinia'
import { ref } from 'vue'

export const THEMES = {
  DARK: 'rosepine',
  LIGHT: 'dawn',
}

export const useThemeStore = defineStore('theme', () => {
  const theme = ref({ dark: false })

  function toggle() {
    theme.value.dark = !theme.value.dark
  }

  return { theme, toggle }
})
