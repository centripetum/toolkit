import * as React from 'react'
import { storiesOf } from '@storybook/react'

import copyCodeBlock from '@pickra/copy-code-block'
import { show, splitOn } from 'sanctuary'

import gt from '../gt'
import gte from '../gte'
import lt from '../lt'
import lte from '../lte'
import or from '../or'

import and from './'

function js (str) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: splitOn('<button')(
          copyCodeBlock(str, { lang: 'javascript' })
        )[0]
      }}
    />
  )
}

storiesOf('validation/validators/and', module)
  .add('Yes && Yes === Yes', () => (
    <p>
      {js(
        `and(gt('n', 3), lte('n', 9))(5)\n\n` +
          '// Expected\n' +
          'Right (5)\n\n' +
          '// Actual\n' +
          `${show(and(gt('n', 3), lte('n', 9))(5))}`
      )}
    </p>
  ))
  .add('Yes && No === No', () => (
    <code>
      and(gt('n', 3), lte('n', 9))(10)
      <br />
      <br />
      Expected:
      <br />
      Left (["n must be 9 or fewer."])
      <br />
      <br />
      Actual:
      <br />
      {show(and(gt('n', 3), lte('n', 9))(10))}
    </code>
  ))
  .add('No && Yes === No', () => (
    <code>
      and(gte('n', 3), lte('n', 9))(1)
      <br />
      <br />
      Expected:
      <br />
      Left (["n must be at least 3."])
      <br />
      <br />
      Actual:
      <br />
      {show(and(gte('n', 3), lte('n', 9))(1))}
    </code>
  ))
  .add('No && No === No', () => (
    <code>
      and(gt('n', 30), lt('n', 20))(25)
      <br />
      <br />
      Expected:
      <br />
      Left (["n must be fewer than 20.", "n must be more than 30."])
      <br />
      <br />
      Actual:
      <br />
      {show(and(gt('n', 30), lt('n', 20))(25))}
    </code>
  ))
  .add('Duplicate errors', () => (
    <code>
      and(gt('n', 3), lte('n', 9))(NaN)
      <br />
      <br />
      Expected:
      <br />
      Left (["n must be a number."])
      <br />
      <br />
      Actual:
      <br />
      {show(and(gt('n', 3), lte('n', 9))(NaN))}
    </code>
  ))
  .add('Multiple duplicate errors', () => (
    <code>
      gt('n', 30)(10) &rarr; {show(gt('n', 30)(10))}
      <br />
      lte('n', 9)(10) &rarr; {show(lte('n', 9)(10))}
      <br />
      <br />
      and(gt('n', 30), lte('n', 9), gt('n', 30), lte('n', 9))(10)
      <br />
      <br />
      Expected:
      <br />
      Left (["n must be 9 or fewer.", "n must be more than 30."])
      <br />
      <br />
      Actual:
      <br />
      {show(and(gt('n', 30), lte('n', 9), gt('n', 30), lte('n', 9))(10))}
    </code>
  ))
  .add('Nested AND and OR', () => (
    <code>
      and(gt('n', 30), lt('n', 20), or(gt('n', 30), lt('n', 20)))(25)
      <br />
      <br />
      Expected:
      <br />
      Left (["n must be fewer than 20.", "n must be more than 30."])
      <br />
      <br />
      Actual:
      <br />
      {show(and(gt('n', 30), lt('n', 20), or(gt('n', 30), lt('n', 20)))(25))}
    </code>
  ))
