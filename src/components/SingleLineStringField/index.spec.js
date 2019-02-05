import * as React from 'react'
import { render } from 'react-testing-library'

import SingleLineStringField from './'

describe('components:SingleLineStringField', () => {
  it('works', () => {
    const { container } = render(
      <SingleLineStringField
        defaultValue='Everything and log'
        label='Message'
        name='message'
        onSave={() => null}
      />
    )

    expect(container).toMatchSnapshot()
  })
})
