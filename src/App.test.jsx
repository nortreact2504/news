import { describe, it, expect } from 'vitest'

describe('A truthy statement', () => {
  it('should be equal to 2', () => {
    const expectedValue = 2
    const thingWeTest = 1+1
    expect(thingWeTest).toEqual(expectedValue)
  })

  it('should be equal to 2', () => {
    const expectedValue = 4
    const thingWeTest = 1+3
    expect(thingWeTest).toEqual(expectedValue)
  })
})