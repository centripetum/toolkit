import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { show } from 'sanctuary'

import gt from './'

const message = (name, value) => `${name} gotta be more than ${value}!`

storiesOf('validation/validators/gt', module)
  .add('19 > 20?', () => (
    <code>
      const message = (name, value) =&gt; `${`{`}name{`}`} gotta be more than $
      {`{`}
      value{`}`}!`
      <br />
      <br />
      gt('Age', 20, message)(19) =&gt; {show(gt('Age', 20, message)(19))}
    </code>
  ))
  .add('20 > 20?', () => (
    <code>gt('Age', 20)(20) =&gt; {show(gt('Age', 20)(20))}</code>
  ))
  .add('21 > 20?', () => (
    <code>gt('Age', 20)(21) =&gt; {show(gt('Age', 20)(21))}</code>
  ))
  .add('NaN > 20?', () => (
    <code>gt('Age', 20)(NaN) =&gt; {show(gt('Age', 20)(NaN))}</code>
  ))
