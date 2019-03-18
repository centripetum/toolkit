import * as React from 'react'

import styled from 'styled-components'

const { useEffect, useState } = React

const handleChange = ({ target = {} }) => {
  console.log('Changed: ' + target.id)
  if (target.id === 'box1') {
    // if checkbox box2 selected deselect it
    if (document.getElementById('box2').checked) {
      document.getElementById('box2').checked = false
    }
  }
  if (target.id === 'box2') {
    // if checkbox box1 selected deselect it
    if (document.getElementById('box1').checked) {
      document.getElementById('box1').checked = false
    }
  }
}

function ThreeStateField () {
  return (
    <div>
      Yes
      <input id='box1' type='checkbox' onChange={handleChange} />
      <br />
      No
      <input id='box2' type='checkbox' onChange={handleChange} />
    </div>
  )
}

export default ThreeStateField
