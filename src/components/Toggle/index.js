import * as React from 'react'

import useFieldState from '../../hooks/useFieldState'
import Button from '../styled/Button'
import Label from '../styled/Label'

export default function Toggle (props) {
  const { defaultValue, handleChange, label, name } = props

  const { onClick } = useFieldState({
    defaultValue,
    handleChange
  })

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Button onClick={onClick}>Toggle Me</Button>
    </div>
  )
}
