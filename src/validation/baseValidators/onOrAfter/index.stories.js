import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Nothing, parseDate, show } from 'sanctuary'

import onOrAfter from './'

storiesOf('validation/baseValidators/onOrAfter', module)
  .add('2000-12-31 on or after 2001-01-01?', () => (
    <code>
      onOrAfter(parseDate('2001-01-01'))(parseDate('2000-12-31'))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_ON_OR_AFTER_DATE_TIME", "testValue": Just
      (new Date ("2001-01-01T00:00:00.000Z")), "value": Just (new Date
      ("2000-12-31T00:00:00.000Z")){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(onOrAfter(parseDate('2001-01-01'))(parseDate('2000-12-31')))}
    </code>
  ))
  .add('2001-01-01 on or after 2001-01-01?', () => (
    <code>
      onOrAfter(parseDate('2001-01-01'))(parseDate('2001-01-01'))
      <br />
      <br />
      Expected:
      <br />
      Right (Just (new Date ("2001-01-01T00:00:00.000Z")))
      <br />
      <br />
      Actual:
      <br />
      {show(onOrAfter(parseDate('2001-01-01'))(parseDate('2001-01-01')))}
    </code>
  ))
  .add('2001-01-02 on or after 2001-01-01?', () => (
    <code>
      onOrAfter(parseDate('2001-01-01'))(parseDate('2001-01-02'))
      <br />
      <br />
      Expected:
      <br />
      Right (Just (new Date ("2001-01-02T00:00:00.000Z")))
      <br />
      <br />
      Actual:
      <br />
      {show(onOrAfter(parseDate('2001-01-01'))(parseDate('2001-01-02')))}
    </code>
  ))
  .add('2001-01-02 on or after undefined?', () => (
    <code>
      onOrAfter()(parseDate('2001-01-02')) (defaults to maximum date)
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_ON_OR_AFTER_DATE_TIME", "testValue": Just
      (new Date ("+275760-09-13T00:00:00.000Z")), "value": Just (new Date
      ("2001-01-02T00:00:00.000Z")){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(onOrAfter()(parseDate('2001-01-02')))}
    </code>
  ))
  .add('Nothing on or after 2001-01-01?', () => (
    <code>
      onOrAfter(parseDate('2001-01-01'))(Nothing)
      <br />
      <br />
      Expected:
      <br />
      Right (Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(onOrAfter(parseDate('2001-01-01'))(Nothing))}
    </code>
  ))
