import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { show } from 'sanctuary'

import gte from './'

const message = (name, value) => `${name} gotta be at least ${value}!`

storiesOf('validation/validators/gte', module)
  .add('18 >= 20?', () => (
    <code>
      const message = (name, value) =&gt; `${`{`}name{`}`} gotta be at least $
      {`{`}
      value{`}`}!`
      <br />
      <br />
      gte('Age', 20, message)(18) =&gt; {show(gte('Age', 20, message)(18))}
    </code>
  ))
  .add('19 >= 20?', () => (
    <code>gte('Age', 20)(19) =&gt; {show(gte('Age', 20)(19))}</code>
  ))
  .add('20 >= 20?', () => (
    <code>gte('Age', 20)(20) =&gt; {show(gte('Age', 20)(20))}</code>
  ))
  .add('NaN >= 20?', () => (
    <code>gte('Age', 20)(NaN) =&gt; {show(gte('Age', 20)(NaN))}</code>
  ))
