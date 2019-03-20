import * as React from 'react'

import { identity } from 'ramda'

const { useState } = React

function ThreeStateField ({
  trueField,
  falseField,
  defaultValue = null,
  validate = identity
}) {
  var [value, setValue] = useState(defaultValue)
  const [valid, setValid] = useState(true)

  const handleChange = ({ target = {} }) => {
    if (target.id === 'trueBox') {
      value = true
      if (document.getElementById('falseBox').checked) {
        document.getElementById('falseBox').checked = false
        value = true
      } else if (document.getElementById('trueBox').checked) {
        value = true
      } else {
        value = null
      }
    } else if (target.id === 'falseBox') {
      if (document.getElementById('trueBox').checked) {
        document.getElementById('trueBox').checked = false
        value = false
      } else if (document.getElementById('falseBox').checked) {
        value = false
      } else {
        value = null
      }
    }
    setValue(value)
    setValid(validate(value))
  }

  return (
    <div>
      {trueField}
      <input
        id='trueBox'
        type='checkbox'
        value={value}
        onChange={handleChange}
      />
      <br />
      {falseField}
      <input
        id='falseBox'
        type='checkbox'
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default ThreeStateField
