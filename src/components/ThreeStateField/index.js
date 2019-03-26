import * as React from 'react'

import { identity } from 'ramda'

const { useState } = React

function ThreeStateField ({ trueField, falseField, validate = identity }) {
  const [value, setValue] = useState(null)
  const [valid, setValid] = useState(true)

  const [trueBoxValue, setTrueBoxValue] = useState(false)
  const [falseBoxValue, setFalseBoxValue] = useState(false)

  const handleChange = ({ target = {} }) => {
    if (target.id === 'trueBox') {
      setTrueBoxValue(!trueBoxValue)
      if (falseBoxValue) {
        setFalseBoxValue(!falseBoxValue)
      }
    } else if (target.id === 'falseBox') {
      setFalseBoxValue(!falseBoxValue)
      if (trueBoxValue) {
        setTrueBoxValue(!trueBoxValue)
      }
    }

    if (trueBoxValue) {
      setValue(true)
    } else if (falseBoxValue) {
      setValue(false)
    } else {
      setValue(null)
    }

    setValid(validate(value))
  }

  return (
    <div>
      {trueField}
      <input
        id='trueBox'
        type='checkbox'
        checked={trueBoxValue}
        value={value}
        onChange={handleChange}
      />
      <br />
      {falseField}
      <input
        id='falseBox'
        type='checkbox'
        value={value}
        checked={falseBoxValue}
        onChange={handleChange}
      />
    </div>
  )
}
export default ThreeStateField
