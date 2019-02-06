import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Nothing, parseDate, show } from 'sanctuary'

import before from './'

storiesOf('validation/baseValidators/before', module)
  .add('2000-12-31 before 2001-01-01?', () => (
    <code>
      before(parseDate('2001-01-01'))(parseDate('2000-12-31'))
      <br />
      <br />
      Expected:
      <br />
      Right (Just (new Date ("2000-12-31T00:00:00.000Z")))
      <br />
      <br />
      Actual:
      <br />
      {show(before(parseDate('2001-01-01'))(parseDate('2000-12-31')))}
    </code>
  ))
  .add('2001-01-01 before 2001-01-01?', () => (
    <code>
      before(parseDate('2001-01-01'))(parseDate('2001-01-01'))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_BEFORE_DATE_TIME", "testValue": Just (new
      Date ("2001-01-01T00:00:00.000Z")), "value": Just (new Date
      ("2001-01-01T00:00:00.000Z")){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(before(parseDate('2001-01-01'))(parseDate('2001-01-01')))}
    </code>
  ))
  .add('2001-01-02 before 2001-01-01?', () => (
    <code>
      before(parseDate('2001-01-01'))(parseDate('2001-01-02'))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_BEFORE_DATE_TIME", "testValue": Just (new
      Date ("2001-01-01T00:00:00.000Z")), "value": Just (new Date
      ("2001-01-02T00:00:00.000Z")){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(before(parseDate('2001-01-01'))(parseDate('2001-01-02')))}
    </code>
  ))
  .add('2001-01-02 before undefined?', () => (
    <code>
      before()(parseDate('2001-01-02')) (defaults to minimum date)
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_BEFORE_DATE_TIME", "testValue": Just (new
      Date ("-271821-04-20T00:00:00.000Z")), "value": Just (new Date
      ("2001-01-02T00:00:00.000Z")){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(before()(parseDate('2001-01-02')))}
    </code>
  ))
  .add('Nothing before 2001-01-01?', () => (
    <code>
      before(parseDate('2001-01-01'))(Nothing)
      <br />
      <br />
      Expected:
      <br />
      Right (Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(before(parseDate('2001-01-01'))(Nothing))}
    </code>
  ))
