import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Just, Nothing, show } from 'sanctuary'

import charCount from './'

storiesOf('validation/utilities/charCount', module)
  .add("Just('Bob')", () => (
    <code>
      Just(<q>Bob</q>) has <b>{show(charCount(Just('Bob')))} characters</b>
    </code>
  ))
  .add("Just('Tommy')", () => (
    <code>
      Just(<q>Tommy</q>) has <b>{show(charCount(Just('Tommy')))} characters</b>
    </code>
  ))
  .add('Nothing', () => (
    <code>
      Nothing has <b>{show(charCount(Nothing))} characters</b>
    </code>
  ))
  .add('undefined', () => (
    <code>
      undefined has <b>{show(charCount())} characters</b> (defaults to Nothing)
    </code>
  ))
