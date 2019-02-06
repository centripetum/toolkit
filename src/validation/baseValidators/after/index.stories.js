import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Nothing, parseDate, show } from 'sanctuary'

import after from './'

storiesOf('validation/baseValidators/after', module)
  .add('2000-12-31 after 2001-01-01?', () => (
    <code>
      after(parseDate('2001-01-01'))(parseDate('2000-12-31'))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_AFTER_DATE_TIME", "testValue": Just (new Date
      ("2001-01-01T00:00:00.000Z")), "value": Just (new Date
      ("2000-12-31T00:00:00.000Z")){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(after(parseDate('2001-01-01'))(parseDate('2000-12-31')))}
    </code>
  ))
  .add('2001-01-01 after 2001-01-01?', () => (
    <code>
      after(parseDate('2001-01-01'))(parseDate('2001-01-01'))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_AFTER_DATE_TIME", "testValue": Just (new Date
      ("2001-01-01T00:00:00.000Z")), "value": Just (new Date
      ("2001-01-01T00:00:00.000Z")){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(after(parseDate('2001-01-01'))(parseDate('2001-01-01')))}
    </code>
  ))
  .add('2001-01-02 after 2001-01-01?', () => (
    <code>
      after(parseDate('2001-01-01'))(parseDate('2001-01-02'))
      <br />
      <br />
      Expected:
      <br />
      Right (Just (new Date ("2001-01-02T00:00:00.000Z")))
      <br />
      <br />
      Actual:
      <br />
      {show(after(parseDate('2001-01-01'))(parseDate('2001-01-02')))}
    </code>
  ))
  .add('2001-01-02 after undefined?', () => (
    <code>
      after()(parseDate('2001-01-02')) (defaults to maximum date)
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_AFTER_DATE_TIME", "testValue": Just (new Date
      ("+275760-09-13T00:00:00.000Z")), "value": Just (new Date
      ("2001-01-02T00:00:00.000Z")){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(after()(parseDate('2001-01-02')))}
    </code>
  ))
  .add('Nothing after 2001-01-01?', () => (
    <code>
      after(parseDate('2001-01-01'))(Nothing)
      <br />
      <br />
      Expected:
      <br />
      Right (Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(after(parseDate('2001-01-01'))(Nothing))}
    </code>
  ))
