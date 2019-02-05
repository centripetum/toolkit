import * as React from 'react'
import { storiesOf } from '@storybook/react'

import ltChars from './'

const fewerThanFiveChars = ltChars(5)

const yesNo = v => (v ? <b>has</b> : <b>does not have</b>)

storiesOf('validation/ltChars', module)
  .add('"Bob" < 5 chars?', () => (
    <code>
      ltChars(5)('Bob') =&gt; true
      <br />
      <br />
      <q>Bob</q> {yesNo(fewerThanFiveChars('Bob'))} fewer than 5 characters
    </code>
  ))
  .add('"Tommy" < 5 chars?', () => (
    <code>
      ltChars(5)('Tommy') =&gt; false
      <br />
      <br />
      <q>Tommy</q> {yesNo(fewerThanFiveChars('Tommy'))} fewer than 5 characters
    </code>
  ))
  .add('"Frederick" < 5 chars?', () => (
    <code>
      ltChars(5)('Frederick') =&gt; false
      <br />
      <br />
      <q>Frederick</q> {yesNo(fewerThanFiveChars('Frederick'))} fewer than 5
      characters
    </code>
  ))
