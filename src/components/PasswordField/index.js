import * as React from 'react'

import { identity, not } from 'ramda'
import styled from 'styled-components'

const { useEffect, useState } = React

const Label = styled.label`
  padding: 0.2rem;
  font-size: 1rem;
  font-family: sans-serif;
  margin: 0 0.2rem;
`
Label.displayName = 'PasswordFieldLabel'

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 0.2rem;
  padding: 0.2rem;
  font-size: 1rem;
  font-family: sans-serif;
  color: ${({ showing }) => (showing ? 'red' : 'green')};
`
Input.displayName = 'PasswordFieldInput'

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
Button.displayName = 'PasswordFieldButton'

function PasswordField ({
  defaultShow,
  defaultValue = '',
  id,
  label,
  name,
  onChange,
  validate = identity
}) {
  const [value, setValue] = useState(defaultValue)
  const [showPassword, setShowPassword] = useState(defaultShow)
  const [valid, setValid] = useState(true)
  const [dirty, setDirty] = useState(false)

  const handleChange = ({ target = {} }) => {
    setValue(target.value)
    setValid(validate(target.value))
    setDirty(true)
  }
  const toggleShowPassword = () => setShowPassword(not(showPassword))

  useEffect(() => onChange(name, value, validate(value)), [value])

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={showPassword ? 'text' : 'password'}
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        showing={showPassword}
      />
      <Button onClick={toggleShowPassword} showing={showPassword}>
        {showPassword ? 'Hide' : 'Show'}
      </Button>
    </div>
  )
}

export default PasswordField
