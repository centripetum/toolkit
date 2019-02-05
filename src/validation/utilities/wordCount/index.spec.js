import wordCount from './'

describe('validation:utilities:wordCount', () => {
  it(`handles punctuation`, () => {
    expect(wordCount(" Here's a few. Punctuation marks, that is! ")).toBe(7)
  })

  it(`returns the correct word count for a series of words`, () => {
    expect(wordCount(' these are four words ')).toBe(4)
  })

  it(`returns a zero count for an empty string`, () => {
    expect(wordCount('')).toBe(0)
  })

  it(`returns a zero count for a falsy value`, () => {
    expect(wordCount(undefined)).toBe(0)
  })
})
