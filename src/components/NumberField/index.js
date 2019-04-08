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
Label.displayName = 'NumberFieldLabel'

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 0.2rem;
  padding: 0.2rem;
  font-size: 1rem;
  font-family: sans-serif;
`
Input.displayName = 'NumberFieldInput'

function getLabel (id, label) {
  if (isNilOrEmpty(label)) {
    return null
  }

  return <Label htmlFor={id}>{label}</Label>
}

function NumberField ({
  defaultValue = '',
  id,
  label,
  name,
  onChange,
  placeholder,
  validator = () => true,
  min = -Infinity,
  max = Infinity,
  warningColour = 'red',
  warningText = 'Not a valid number',
  maxDecimal = Infinity
}) {
  const [value, setValue] = useState(defaultValue)
  //list is the permitted list of chars
  const [list, setList] = useState('0123456789.+-/eE')
  const [valid, setValid] = useState(true)

  const handleChange = ({ target = {} }) => {
    var lastchar = target.value.substr(-1)
    console.log('lastchar:' + lastchar)
    if (list.includes(lastchar)) {
      setValue(target.value)
      console.log('value set to:' + target.value)
    }
  }

  return (
    <div>
      {getLabel(id, label)}
      <Input
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default NumberField
