import * as React from 'react'
import { storiesOf } from '@storybook/react'

import lteChars from './'

const noMoreThanFiveChars = lteChars(5)

const yesNo = v => (v ? <b>has no more than</b> : <b>has more than</b>)

storiesOf('validation/lteChars', module)
  .add('"Bob" <= 5 chars?', () => (
    <code>
      lteChars(5)('Bob') =&gt; true
      <br />
      <br />
      <q>Bob</q> {yesNo(noMoreThanFiveChars('Bob'))} 5 characters
    </code>
  ))
  .add('"Tommy" <= 5 chars?', () => (
    <code>
      lteChars(5)('Tommy') =&gt; true
      <br />
      <br />
      <q>Tommy</q> {yesNo(noMoreThanFiveChars('Tommy'))} 5 characters
    </code>
  ))
  .add('"Frederick" <= 5 chars?', () => (
    <code>
      lteChars(5)('Frederick') =&gt; false
      <br />
      <br />
      <q>Frederick</q> {yesNo(noMoreThanFiveChars('Frederick'))} 5 characters
    </code>
  ))
