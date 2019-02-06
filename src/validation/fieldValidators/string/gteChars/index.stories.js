import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Just, Nothing, show } from 'sanctuary'

import gteChars from './'

storiesOf('validation/fieldValidators/string/gteChars', module)
  .add("Just('Bob') >= 5 characters?", () => (
    <code>
      gteChars(Just(5))(Just('Bob'))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "TOO_FEW_CHARACTERS", "testValue": Just (5),
      "value": Just ("Bob"){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(gteChars(Just(5))(Just('Bob')))}
    </code>
  ))
  .add("Just('Tommy') >= 5 characters?", () => (
    <code>
      gteChars(Just(5))(Just('Tommy'))
      <br />
      <br />
      Expected:
      <br />
      Right (Just ("Tommy"))
      <br />
      <br />
      Actual:
      <br />
      {show(gteChars(Just(5))(Just('Tommy')))}
    </code>
  ))
  .add('Nothing >= 5 characters?', () => (
    <code>
      gteChars(Just(5))(Nothing)
      <br />
      <br />
      Expected:
      <br />
      Right (Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(gteChars(Just(5))(Nothing))}
    </code>
  ))
  .add("Just('Tommy') >= Nothing characters?", () => (
    <code>
      gteChars(Nothing)(Just('Tommy'))
      <br />
      <br />
      Expected:
      <br />
      Right (Just ("Tommy"))
      <br />
      <br />
      Actual:
      <br />
      {show(gteChars(Nothing)(Just('Tommy')))}
    </code>
  ))
