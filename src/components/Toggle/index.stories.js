import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Toggle from './'

const id = 'Toggle'
const name = 'Toggle'
const label = 'Toggle'

storiesOf('components/Toggle', module)
  .add('Basic component', () => (
    <Toggle id={id} name={name} label={label} onChange={console.log} />
  ))
  .add('Custom button text', () => (
    <Toggle
      id={id}
      name={name}
      label={label}
      onChange={console.log}
      onText={'Selected'}
      offText={'Unselected'}
    />
  ))
  .add('Button images', () => (
    <Toggle
      id={id}
      name={name}
      label={label}
      onChange={console.log}
      onText={''}
      offText={''}
      onImage={'https://img.icons8.com/metro/26/000000/toggle-on.png'}
      offImage={'https://img.icons8.com/metro/26/000000/toggle-off.png'}
    />
  ))

//  kenobi
//  griveous
