import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { show } from 'sanctuary'

import lte from './'

const message = (name, value) => `${name} can't be more than ${value}!`

storiesOf('validation/validators/lte', module)
  .add('12 <= 12?', () => (
    <code>
      lte('Item count', 12)(12) =&gt; {show(lte('Item count', 12)(12))}
    </code>
  ))
  .add('13 <= 12?', () => (
    <code>
      lte('Item count', 12)(13) =&gt; {show(lte('Item count', 12)(13))}
    </code>
  ))
  .add('14 <= 12?', () => (
    <code>
      const message = (name, value) =&gt; `${`{`}name{`}`} can't be more than $
      {`{`}value
      {`}`}!`
      <br />
      <br />
      lte('Item count', 12, message)(14) =&gt;{' '}
      {show(lte('Item count', 12, message)(14))}
    </code>
  ))
  .add('NaN <= 12?', () => (
    <code>
      lte('Item count', 12)(NaN) =&gt; {show(lte('Item count', 12)(NaN))}
    </code>
  ))
