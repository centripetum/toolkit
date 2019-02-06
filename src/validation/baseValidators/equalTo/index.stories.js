import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Just, Nothing, show } from 'sanctuary'

import equalTo from './'

storiesOf('validation/baseValidators/equalTo', module)
  .add('19 === 20?', () => (
    <code>
      equalTo(Just(20))(Just(19))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_EQUAL_TO", "testValue": Just (20), "value":
      Just (19){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(equalTo(Just(20))(Just(19)))}
    </code>
  ))
  .add('20 === 20?', () => (
    <code>
      equalTo(Just(20))(Just(20))
      <br />
      <br />
      Expected:
      <br />
      Right (Just (20))
      <br />
      <br />
      Actual:
      <br />
      {show(equalTo(Just(20))(Just(20)))}
    </code>
  ))
  .add('21 === 20?', () => (
    <code>
      equalTo(Just(20))(Just(21))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_EQUAL_TO", "testValue": Just (20), "value":
      Just (21){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(equalTo(Just(20))(Just(21)))}
    </code>
  ))
  .add('21 === undefined?', () => (
    <code>
      equalTo()(Just(21))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_EQUAL_TO", "testValue": Nothing, "value":
      Just (21)
      {`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(equalTo()(Just(21)))}
    </code>
  ))
  .add('Nothing === 20?', () => (
    <code>
      equalTo(Just(20))(Nothing)
      <br />
      <br />
      Expected:
      <br />
      Right (Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(equalTo(Just(20))(Nothing))}
    </code>
  ))
