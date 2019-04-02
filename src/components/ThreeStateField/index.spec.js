import * as React from 'react'
import { render } from 'react-testing-library'

import ThreeStateField from './'

describe('component: ThreeStateField', () => {
  it('renders a three state field', () => {
    const { container } = render(
      <ThreeStateField trueField={'True'} falseField={'False'} />
    )
    expect(container).toMatchSnapshot()
  })
})
