import { Just, Nothing } from 'sanctuary'

import wordCount from './'

describe('validation:utilities:wordCount', () => {
  it(`handles punctuation`, () => {
    expect(
      wordCount(Just(" Here's a few. Punctuation marks, that is! "))
    ).toEqual(Just(7))
  })

  it(`returns Just(the correct word count) for Just(a series of words)`, () => {
    expect(wordCount(Just(' these are four words '))).toEqual(Just(4))
  })

  it(`returns Just(0) for Just('')`, () => {
    expect(wordCount(Just(''))).toEqual(Just(0))
  })

  it(`returns Nothing when Nothing received`, () => {
    expect(wordCount(Nothing)).toEqual(Nothing)
  })

  it(`returns Nothing when undefined received`, () => {
    expect(wordCount()).toEqual(Nothing)
  })
})
