import { createPinia, setActivePinia } from 'pinia'
import { useThemeStore } from './theme'

describe('theme Store', () => {
  let themeStore: ReturnType<typeof useThemeStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    themeStore = useThemeStore()
  })

  it('should set the theme to dark', () => {
    themeStore.toggle()

    expect(themeStore.theme).toStrictEqual({ dark: true })
  })

  it('should set the theme to light', () => {
    themeStore.toggle()
    themeStore.toggle()

    expect(themeStore.theme).toStrictEqual({ dark: false })
  })
})
