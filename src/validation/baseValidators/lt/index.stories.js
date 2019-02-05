import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { show } from 'sanctuary'

import lt from './'

const message = (name, value) => `${name} can't be ${value} or more!`

storiesOf('validation/validators/lt', module)
  .add('11 < 12?', () => (
    <code>lt('Item count', 12)(11) =&gt; {show(lt('Item count', 12)(11))}</code>
  ))
  .add('12 < 12?', () => (
    <code>lt('Item count', 12)(12) =&gt; {show(lt('Item count', 12)(12))}</code>
  ))
  .add('13 < 12?', () => (
    <code>
      const message = (name, value) =&gt; `${`{`}name{`}`} can't be ${`{`}value
      {`}`} or more!`
      <br />
      <br />
      lt('Item count', 12, message)(13) =&gt;{' '}
      {show(lt('Item count', 12, message)(13))}
    </code>
  ))
  .add('NaN < 12?', () => (
    <code>
      lt('Item count', 12)(NaN) =&gt; {show(lt('Item count', 12)(NaN))}
    </code>
  ))
