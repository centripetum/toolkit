import * as React from 'react'

import TextField from './'
import { render } from 'react-testing-library'

describe('TextField', () => {
  it('works', () => {
    const { container } = render(<TextField />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
