import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { gt, pipe, prop } from 'sanctuary'

import PasswordField from './'

const id = 'password'
const name = 'password'
const label = 'Password'

storiesOf('components/PasswordField', module).add('Basic component', () => (
  <PasswordField
    id={id}
    name={name}
    label={label}
    onChange={console.log}
    validate={pipe([prop('length'), gt(10)])}
  />
))
