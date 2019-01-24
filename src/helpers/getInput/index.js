import * as React from 'react'

import { isFunction } from 'ramda-adjunct'

import Input from '../../styled/Input'

export default function getInput (input, name, onChange, type, value) {
  if (isFunction(input)) {
    return input(name, onChange, value)
  }

  return <Input name={name} type={type} value={value} onChange={onChange} />
}
