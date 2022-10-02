import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useCounterStore } from '../store/counter'

describe('counter store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increases ...', () => {
    const counter = useCounterStore()

    expect(counter.count).toBe(0)
    counter.increase()
    expect(counter.count).toBe(1)
  })

  it('decreases ...', () => {
    const counter = useCounterStore()

    expect(counter.count).toBe(0)
    counter.decrease()
    expect(counter.count).toBe(-1)
  })
})
