import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Just, Left, Right, show } from 'sanctuary'

import and from './'

const increment = (() => {
  let i = 0
  return () => i++
})()
const success = () => Right(Just(1))
const failure = () => Left({ error: `ERROR${increment()}` })

storiesOf('validation/baseValidators/and', module)
  .add('success AND success', () => (
    <code>
      and(success, success)(Just(1))
      <br />
      <br />
      Expected:
      <br />
      Right (Just (1))
      <br />
      <br />
      Actual:
      <br />
      {show(and(success, success)(Just(1)))}
    </code>
  ))
  .add('success AND success AND success', () => (
    <code>
      and(success, success, success)(Just(1))
      <br />
      <br />
      Expected:
      <br />
      Right (Just (1))
      <br />
      <br />
      Actual:
      <br />
      {show(and(success, success, success)(Just(1)))}
    </code>
  ))
  .add('failure AND success', () => (
    <code>
      and(failure, success)(Just(1))
      <br />
      <br />
      Expected:
      <br />
      Left ([{`{`}"error": "ERROR*"{`}`}])
      <br />
      <br />
      Actual:
      <br />
      {show(and(failure, success)(Just(1)))}
    </code>
  ))
  .add('success AND failure', () => (
    <code>
      and(success, failure)(Just(1))
      <br />
      <br />
      Expected:
      <br />
      Left ([{`{`}"error": "ERROR*"{`}`}])
      <br />
      <br />
      Actual:
      <br />
      {show(and(success, failure)(Just(1)))}
    </code>
  ))
  .add('failure AND failure', () => (
    <code>
      and(failure, failure)(Just(1))
      <br />
      <br />
      Expected:
      <br />
      Left ([{`{`}"error": "ERROR*"{`}`}, {`{`}"error": "ERROR*"{`}`}])
      <br />
      <br />
      Actual:
      <br />
      {show(and(failure, failure)(Just(1)))}
    </code>
  ))
  .add('failure AND failure AND failure', () => (
    <code>
      and(failure, failure, failure)(Just(1))
      <br />
      <br />
      Expected:
      <br />
      Left ([{`{`}"error": "ERROR*"{`}`}, {`{`}"error": "ERROR*"{`}`}, {`{`}
      "error": "ERROR*"{`}`}])
      <br />
      <br />
      Actual:
      <br />
      {show(and(failure, failure, failure)(Just(1)))}
    </code>
  ))
