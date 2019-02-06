import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Just, Nothing, show } from 'sanctuary'

import lteWords from './'

storiesOf('validation/fieldValidators/string/lteWords', module)
  .add("Just('Bob is dead!') <= 3 words?", () => (
    <code>
      lteWords(Just(3))(Just('Bob is dead!'))
      <br />
      <br />
      Expected:
      <br />
      Right (Just ("Bob is dead!"))
      <br />
      <br />
      Actual:
      <br />
      {show(lteWords(Just(3))(Just('Bob is dead!')))}
    </code>
  ))
  .add("Just('Tommy is no more, too.') <= 3 words?", () => (
    <code>
      lteWords(Just(3))(Just('Tommy is no more, too.'))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "TOO_MANY_WORDS", "testValue": Just (3), "value":
      Just ("Tommy is no more, too."){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(lteWords(Just(3))(Just('Tommy is no more, too.')))}
    </code>
  ))
  .add('Nothing <= 3 words?', () => (
    <code>
      lteWords(Just(3))(Nothing)
      <br />
      <br />
      Expected:
      <br />
      Right (Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(lteWords(Just(3))(Nothing))}
    </code>
  ))
  .add("Just('Tommy is no more, too.') <= Nothing words?", () => (
    <code>
      lteWords(Nothing)(Just('Tommy is no more, too.'))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "TOO_MANY_WORDS", "testValue": Nothing, "value":
      Just ("Tommy is no more, too."){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(lteWords(Nothing)(Just('Tommy is no more, too.')))}
    </code>
  ))
