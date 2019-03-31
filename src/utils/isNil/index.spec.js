import isNil from '.'

describe('utils:isNil', () => {
  it('returns true when value is null', () => {
    expect(isNil(null)).toEqual(true)
  })
  it('returns true when value is undefined', () => {
    expect(isNil(undefined)).toEqual(true)
  })
  it('returns false for all other values', () => {
    expect(isNil('test')).toEqual(false)
    expect(isNil(5)).toEqual(false)
    expect(isNil(['hello'])).toEqual(false)
    expect(isNil({ hi: 'there' })).toEqual(false)
  })
})
