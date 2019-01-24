import * as React from 'react'
import { render } from 'react-testing-library'

import Field from './'

describe('Field', () => {
  it('works', () => {
    const { container } = render(
      <Field
        defaultValue='Everything and log'
        labelText='Message'
        name='message'
        onSave={() => null}
      />
    )

    expect(container).toMatchSnapshot()
  })
})
