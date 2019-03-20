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
    if (target.id === 'box1') {
      value = true
      if (document.getElementById('box2').checked) {
        document.getElementById('box2').checked = false
        value = true
      } else if (document.getElementById('box1').checked) {
        value = true
      } else {
        value = null
      }
    } else if (target.id === 'box2') {
      if (document.getElementById('box1').checked) {
        document.getElementById('box1').checked = false
        value = false
      } else if (document.getElementById('box2').checked) {
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
      <input id='box1' type='checkbox' value={value} onChange={handleChange} />
      <br />
      {falseField}
      <input id='box2' type='checkbox' value={value} onChange={handleChange} />
    </div>
  )
}

export default ThreeStateField
