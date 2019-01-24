import * as React from 'react'

import { isFunction } from 'ramda-adjunct'

import Label from '../../styled/Label'

export default function getLabel (disabled, label, name, value) {
  if (disabled) {
    return null
  }

  if (isFunction(label)) {
    return label(name)
  }

  return <Label htmlFor={name}>{value}</Label>
}
