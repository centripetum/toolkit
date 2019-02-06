import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Just, Nothing, show } from 'sanctuary'

import ltChars from './'

storiesOf('validation/fieldValidators/string/ltChars', module)
  .add("Just('Bob') < 5 characters?", () => (
    <code>
      ltChars(Just(5))(Just('Bob'))
      <br />
      <br />
      Expected:
      <br />
      Right (Just ("Bob"))
      <br />
      <br />
      Actual:
      <br />
      {show(ltChars(Just(5))(Just('Bob')))}
    </code>
  ))
  .add("Just('Tommy') < 5 characters?", () => (
    <code>
      ltChars(Just(5))(Just('Tommy'))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "TOO_MANY_CHARACTERS", "testValue": Just (5),
      "value": Just ("Tommy"){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(ltChars(Just(5))(Just('Tommy')))}
    </code>
  ))
  .add('Nothing < 5 characters?', () => (
    <code>
      ltChars(Just(5))(Nothing)
      <br />
      <br />
      Expected:
      <br />
      Right (Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(ltChars(Just(5))(Nothing))}
    </code>
  ))
  .add("Just('Tommy') < Nothing characters?", () => (
    <code>
      ltChars(Nothing)(Just('Tommy'))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "TOO_MANY_CHARACTERS", "testValue": Nothing,
      "value": Just ("Tommy"){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(ltChars(Nothing)(Just('Tommy')))}
    </code>
  ))
