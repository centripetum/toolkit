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

function NumberField ({
  defaultValue = '',
  id,
  label,
  name,
  onChange,
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
    setValue(target.value)
  }
  return <div />
}

export default NumberField
