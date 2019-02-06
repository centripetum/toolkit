import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Just, Nothing, show } from 'sanctuary'

import lt from './'

storiesOf('validation/baseValidators/lt', module)
  .add('11 < 12?', () => (
    <code>
      lt(Just(12))(Just(11))
      <br />
      <br />
      Expected:
      <br />
      Right (Just (11))
      <br />
      <br />
      Actual:
      <br />
      {show(lt(Just(12))(Just(11)))}
    </code>
  ))
  .add('12 < 12?', () => (
    <code>
      lt(Just(12))(Just(12))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_LT", "testValue": Just (20), "value": Just
      (20){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(lt(Just(12))(Just(12)))}
    </code>
  ))
  .add('13 < 12?', () => (
    <code>
      lt(Just(12))(Just(13))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_LT", "testValue": Just (12), "value": Just
      (13){`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(lt(Just(12))(Just(13)))}
    </code>
  ))
  .add('13 < undefined?', () => (
    <code>
      lt()(Just(13))
      <br />
      <br />
      Expected:
      <br />
      Left ({`{`}"errorType": "NOT_LT", "testValue": Nothing, "value": Just (13)
      {`}`})
      <br />
      <br />
      Actual:
      <br />
      {show(lt()(Just(13)))}
    </code>
  ))
  .add('Nothing < 12?', () => (
    <code>
      lt(Just(12))(Nothing)
      <br />
      <br />
      Expected:
      <br />
      Right (Nothing)
      <br />
      <br />
      Actual:
      <br />
      {show(lt(Just(12))(Nothing))}
    </code>
  ))
