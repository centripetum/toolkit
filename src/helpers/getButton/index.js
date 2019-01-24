import * as React from 'react'

import { isNil } from 'ramda'
import { isFunction } from 'ramda-adjunct'

import Button from '../../styled/Button'

export default function getButton (button, disabled, label, onClick) {
  if (isNil(onClick)) {
    return null
  }

  if (isFunction(button)) {
    return button(onClick, disabled)
  }

  return (
    <Button onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  )
}
