import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Toggle from './'

const id = 'Toggle'
const name = 'Toggle'
const label = 'Toggle'

storiesOf('components/Toggle', module).add('Basic component', () => (
  <Toggle id={id} name={name} label={label} />
))
