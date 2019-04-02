import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { gt, pipe, prop } from 'sanctuary'

import NumberField from './'

const id = 'number'
const name = 'number'
const label = 'Number'

storiesOf('components/NumberField', module).add('Basic component', () => (
  <PasswordField
    id={id}
    name={name}
    label={label}
    onChange={console.log}
    validate={pipe([prop('length'), gt(10)])}
    placeholder='Fill me in'
  />
))
