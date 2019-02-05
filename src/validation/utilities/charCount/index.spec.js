import charCount from './'

describe('validation:utilities:charCount', () => {
  it(`returns the correct character count for a string`, () => {
    expect(charCount(' some characters ')).toBe(17)
  })

  it(`returns a zero count for an empty string`, () => {
    expect(charCount('')).toBe(0)
  })

  it(`returns a zero count for a falsy value`, () => {
    expect(charCount(undefined)).toBe(0)
  })
})
