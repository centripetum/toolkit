import * as React from 'react'

import styled from 'styled-components'

const { useEffect, useState } = React

const handleChange = ({ target = {} }) => {
  console.log('changed')
}

function ThreeStateField ({ name }) {
  return (
    <div>
      Yes
      <input name={name} type='checkbox' onChange={handleChange} />
    </div>
  )
}

export default ThreeStateField
