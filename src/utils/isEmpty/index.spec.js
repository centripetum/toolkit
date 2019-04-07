import isEmpty from '.'

describe('utils:isEmpty', () => {
  it('returns true when value is an empty string', () => {
    expect(isEmpty('')).toEqual(true)
  })
  it('returns true when value is an empty array', () => {
    expect(isEmpty([])).toEqual(true)
  })
  it('returns true when value is an empty object', () => {
    expect(isEmpty({})).toEqual(true)
  })
  it('returns false for all other values', () => {
    expect(isEmpty('test')).toEqual(false)
    expect(isEmpty(5)).toEqual(false)
    expect(isEmpty(['hello'])).toEqual(false)
    expect(isEmpty({ hi: 'there' })).toEqual(false)
  })
})
