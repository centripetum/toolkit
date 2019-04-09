import * as React from 'react'

import { identity, not } from 'ramda'
import { isNilOrEmpty } from 'ramda-adjunct'
import styled from 'styled-components'

const { useEffect, useState } = React

const Label = styled.label`
  padding: 0.2rem;
  font-size: 1rem;
  font-family: sans-serif;
  margin: 0 0.2rem;
`
Label.displayName = 'ToggleLabel'

const Button = styled.button`
  border: 1px solid gray;
  border-color: ${({ showing }) => (showing ? 'green' : 'red')};
  border-radius: 0.2rem;
  padding: 0.2rem;
  font-size: 1rem;
  font-family: sans-serif;
  margin: 0 0.2rem;
  color: ${({ showing }) => (showing ? 'green' : 'red')};
`
Button.displayName = 'Toggle'

function getLabel (id, label) {
  if (isNilOrEmpty(label)) {
    return null
  }

  return <Label htmlFor={id}>{label}</Label>
}

export default function Toggle ({
  defaultValue = false,
  id,
  label,
  name,
  onChange,
  validate = identity
}) {
  const [value, setValue] = useState(defaultValue)

  const toggle = () => setValue(not(value))

  useEffect(() => onChange(name, value, validate(value)), [value])

  return (
    <div onClick={toggle}>
      {getLabel(id, label)}
      <Button id={id} name={name}>
        {value ? 'Yes' : 'No'}
      </Button>
    </div>
  )
}
