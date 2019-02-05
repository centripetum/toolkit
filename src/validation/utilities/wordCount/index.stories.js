import * as React from 'react'
import { storiesOf } from '@storybook/react'

import wordCount from './'

storiesOf('validation/utilities/wordCount', module)
  .add('"Bob is dead"', () => (
    <code>
      <q>Bob is dead</q> has <b>{wordCount('Bob is dead')} words</b>
    </code>
  ))
  .add('"Tommy is no more, too"', () => (
    <code>
      <q>Tommy is no more, too</q> has{' '}
      <b>{wordCount('Tommy is no more, too')} words</b>
    </code>
  ))
  .add('undefined', () => (
    <code>
      undefined has <b>{wordCount()} words</b>
    </code>
  ))
