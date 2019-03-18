import * as React from 'react'

import styled from 'styled-components'

const { useEffect, useState } = React

function ThreeStateField () {
  return (
    <div>
      Yes
      <input type='checkbox' />
      <br />
      No
      <input type='checkbox' />
    </div>
  )
}

export default ThreeStateField
