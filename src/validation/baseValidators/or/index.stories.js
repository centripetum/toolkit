import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Just, Left, Right, show } from 'sanctuary'

import or from './'

const increment = (() => {
  let i = 0
  return () => i++
})()
const success = () => Right(Just(1))
const failure = () => Left({ error: `ERROR${increment()}` })

storiesOf('validation/baseValidators/or', module)
  .add('success OR success', () => (
    <code>
      or(success, success)(Just(1))
      <br />
      <br />
      Expected:
      <br />
      Right (Just (1))
      <br />
      <br />
      Actual:
      <br />
      {show(or(success, success)(Just(1)))}
    </code>
  ))
  .add('success OR success OR success', () => (
    <code>
      or(success, success, success)(Just(1))
      <br />
      <br />
      Expected:
      <br />
      Right (Just (1))
      <br />
      <br />
      Actual:
      <br />
      {show(or(success, success, success)(Just(1)))}
    </code>
  ))
  .add('failure OR success', () => (
    <code>
      or(failure, success)(Just(1))
      <br />
      <br />
      Expected:
      <br />
      Right (Just (1))
      <br />
      <br />
      Actual:
      <br />
      {show(or(failure, success)(Just(1)))}
    </code>
  ))
  .add('success OR failure', () => (
    <code>
      or(success, failure)(Just(1))
      <br />
      <br />
      Expected:
      <br />
      Right (Just (1))
      <br />
      <br />
      Actual:
      <br />
      {show(or(success, failure)(Just(1)))}
    </code>
  ))
  .add('failure OR failure', () => (
    <code>
      or(failure, failure)(Just(1))
      <br />
      <br />
      Expected:
      <br />
      Left ([{`{`}"error": "ERROR*"{`}`}, {`{`}"error": "ERROR*"{`}`}])
      <br />
      <br />
      Actual:
      <br />
      {show(or(failure, failure)(Just(1)))}
    </code>
  ))
  .add('failure OR failure OR failure', () => (
    <code>
      or(failure, failure, failure)(Just(1))
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
      {show(or(failure, failure, failure)(Just(1)))}
    </code>
  ))
