import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { show } from 'sanctuary'

import gtChars from './'

const message = (name, value) =>
  `${value} characters ain't enough for a ${name}.`

storiesOf('validation/gtChars', module)
  .add("'Bob' > 5 chars?", () => (
    <code>
      const message = (name, value) => `${'{'}value{'}'} characters ain't enough
      for a ${'{'}name{'}'}.`
      <br />
      <br />
      gtChars('Name', 5, message)('Bob') =&gt;{' '}
      {show(gtChars('Name', 5, message)('Bob'))}
    </code>
  ))
  .add("'Tommy' > 5 chars?", () => (
    <code>
      gtChars('Name', 5)('Tommy') =&gt; {show(gtChars('Name', 5)('Tommy'))}
    </code>
  ))
  .add("'Frederick' > 5 chars?", () => (
    <code>
      gtChars('Name', 5)('Frederick') =&gt;{' '}
      {show(gtChars('Name', 5)('Frederick'))}
    </code>
  ))
