import * as React from 'react'

const handleChange = ({ target = {} }) => {
  if (target.id === 'box1') {
    if (document.getElementById('box2').checked) {
      document.getElementById('box2').checked = false
    }
  }
  if (target.id === 'box2') {
    if (document.getElementById('box1').checked) {
      document.getElementById('box1').checked = false
    }
  }
}

function ThreeStateField ({ field1, field2 }) {
  return (
    <div>
      {field1}
      <input id='box1' type='checkbox' onChange={handleChange} />
      <br />
      {field2}
      <input id='box2' type='checkbox' onChange={handleChange} />
    </div>
  )
}

export default ThreeStateField
