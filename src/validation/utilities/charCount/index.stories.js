import * as React from 'react'
import { storiesOf } from '@storybook/react'

import charCount from './'

storiesOf('validation/utilities/charCount', module)
  .add('"Bob"', () => (
    <code>
      <q>Bob</q> has <b>{charCount('Bob')} characters</b>
    </code>
  ))
  .add('"Tommy"', () => (
    <code>
      <q>Tommy</q> has <b>{charCount('Tommy')} characters</b>
    </code>
  ))
  .add('undefined', () => (
    <code>
      undefined has <b>{charCount()} characters</b>
    </code>
  ))
