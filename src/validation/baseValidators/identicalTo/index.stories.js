import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { show } from 'sanctuary'

import identicalTo from './'

storiesOf('validation/validators/identicalTo', module)
  .add('19 === 20?', () => (
    <code>
      identicalTo('Age', 19)(20) =&gt; {show(identicalTo('Age', 19)(20))}
    </code>
  ))
  .add('20 === 20?', () => (
    <code>
      identicalTo('Age', 20)(20) =&gt; {show(identicalTo('Age', 20)(20))}
    </code>
  ))
  .add('21 === 20?', () => (
    <code>
      identicalTo('Age', 20)(21) =&gt; {show(identicalTo('Age', 20)(21))}
    </code>
  ))
  .add('Bob === bob?', () => (
    <code>
      identicalTo('Name', 'Bob')('bob') =&gt;{' '}
      {show(identicalTo('Name', 'Bob')('bob'))}
    </code>
  ))
  .add('Bob === Bob?', () => (
    <code>
      identicalTo('Name', 'Bob')('Bob') =&gt;{' '}
      {show(identicalTo('Name', 'Bob')('Bob'))}
    </code>
  ))
