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
  defaultShow,
  defaultValue = '',
  id,
  label,
  name,
  onChange,
  placeholder
}) {
  const [value, setValue] = useState(defaultValue)
  const handleChange = ({ target = {} }) => {
    setValue(target.value)
  }
  return <div />
}

export default NumberField
