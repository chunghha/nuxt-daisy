import { describe, expect, it } from 'vitest'

import { greet } from './greet'

describe('greet function', () => {
  it('says hello ...', async () => {
    const hello = await greet('nuxt')

    expect(hello).toBe('Hello nuxt from server')
  })
})
