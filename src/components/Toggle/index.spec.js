import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Toggle from './'

describe('components:Toggle', () => {
  it('Toggle is being created properly with default False value', () => {
    const { container } = render(
      <Toggle
        id='Toggle'
        name='Toggle'
        label='Toggle'
        onChange={() => undefined}
      />
    )

    expect(container).toMatchSnapshot()
  }),
    it('Toggle is being created properly with initial True value', () => {
      const { container } = render(
        <Toggle
          defaultValue
          id='Toggle'
          name='Toggle'
          label='Toggle'
          onChange={() => undefined}
        />
      )

      expect(container).toMatchSnapshot()
    }),
    it('Toggle is being created properly with no label', () => {
      const { container } = render(
        <Toggle
          id='Toggle'
          name='Toggle'
          label={null}
          onChange={() => undefined}
        />
      )

      expect(container).toMatchSnapshot()
    })
  it('Changes the state of the toggle when it is clicked', () => {
    const { container } = render(
      <Toggle
        id='Toggle'
        name='Toggle'
        label={null}
        onChange={() => undefined}
      />
    )

    const toggle = container.firstChild
    const toggleButton = toggle.firstChild
    expect(toggle.textContent).toBe('No')
    fireEvent.click(toggleButton)
    expect(toggle.textContent).toBe('Yes')
  })
})
