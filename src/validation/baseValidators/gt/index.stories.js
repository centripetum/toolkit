import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Just, Nothing, show } from 'sanctuary'

import gt from './'

storiesOf('validation/baseValidators/gt', module)
  .add('19 > 20?', () => (
    <code>
      gt(Just(20))(Just(19))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_GT", "testValue": Just (20), "value": Just
      (19){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(gt(Just(20))(Just(19)))}
    </code>
  ))
  .add('20 > 20?', () => (
    <code>
      gt(Just(20))(Just(20))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_GT", "testValue": Just (20), "value": Just
      (20){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(gt(Just(20))(Just(20)))}
    </code>
  ))
  .add('21 > 20?', () => (
    <code>
      gt(Just(20))(Just(21))
      <br />
      <br />
      Expected:
      <br />
      Right (Just (21))
      <br />
      <br />
      Actual:
      <br />
      {show(gt(Just(20))(Just(21)))}
    </code>
  ))
  .add('21 > undefined?', () => (
    <code>
      gt()(Just(21))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_GT", "testValue": Just (Infinity), "value":
      Just (21)
      {`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(gt()(Just(21)))}
    </code>
  ))
  .add('Nothing > 20?', () => (
    <code>
      gt(Just(20))(Nothing)
      <br />
      <br />
      Expected:
      <br />
      Right (Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(gt(Just(20))(Nothing))}
    </code>
  ))
