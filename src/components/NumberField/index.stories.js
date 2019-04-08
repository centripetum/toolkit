import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { pipe, prop } from 'sanctuary'

import NumberField from './'

const id = 'number'
const name = 'number'
const label = 'Number'

storiesOf('components/NumberField', module).add('Basic component', () => (
  <NumberField
    id={id}
    name={name}
    label={label}
    onChange={console.log}
    validate={pipe([prop('length')])}
  />
))
