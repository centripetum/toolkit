import * as React from 'react'
import { storiesOf } from '@storybook/react'

import gteChars from './'

const atLeastFiveChars = gteChars(5)

const yesNo = v => (v ? <b>has</b> : <b>does not have</b>)

storiesOf('validation/gteChars', module)
  .add('"Bob" >= 5 chars?', () => (
    <code>
      gteChars(5)('Bob') =&gt; false
      <br />
      <br />
      <q>Bob</q> {yesNo(atLeastFiveChars('Bob'))} at least 5 characters
    </code>
  ))
  .add('"Tommy" >= 5 chars?', () => (
    <code>
      gteChars(5)('Tommy') =&gt; true
      <br />
      <br />
      <q>Tommy</q> {yesNo(atLeastFiveChars('Tommy'))} at least 5 characters
    </code>
  ))
  .add('"Frederick" >= 5 chars?', () => (
    <code>
      gteChars(5)('Frederick') =&gt; true
      <br />
      <br />
      <q>Frederick</q> {yesNo(atLeastFiveChars('Frederick'))} at least 5
      characters
    </code>
  ))
