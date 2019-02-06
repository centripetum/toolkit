import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Just, Nothing, show } from 'sanctuary'

import wordCount from './'

storiesOf('validation/utilities/wordCount', module)
  .add("Just('Bob is dead')", () => (
    <code>
      Just(<q>Bob is dead</q>) has{' '}
      <b>{show(wordCount(Just('Bob is dead')))} words</b>
    </code>
  ))
  .add("Just('Tommy is no more, too')", () => (
    <code>
      Just(<q>Tommy is no more, too</q>) has{' '}
      <b>{show(wordCount(Just('Tommy is no more, too')))} words</b>
    </code>
  ))
  .add('Nothing', () => (
    <code>
      Nothing has <b>{show(wordCount(Nothing))} words</b>
    </code>
  ))
  .add('undefined', () => (
    <code>
      undefined has <b>{show(wordCount())} words</b> (defaults to Nothing)
    </code>
  ))
