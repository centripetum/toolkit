import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { show } from 'sanctuary'

import notIdenticalTo from './'

storiesOf('validation/validators/notIdenticalTo', module)
  .add('19 !== 20?', () => (
    <code>
      notIdenticalTo('Age', 19)(20) =&gt; {show(notIdenticalTo('Age', 19)(20))}
    </code>
  ))
  .add('20 !== 20?', () => (
    <code>
      notIdenticalTo('Age', 20)(20) =&gt; {show(notIdenticalTo('Age', 20)(20))}
    </code>
  ))
  .add('21 !== 20?', () => (
    <code>
      notIdenticalTo('Age', 20)(21) =&gt; {show(notIdenticalTo('Age', 20)(21))}
    </code>
  ))
  .add('Bob !== bob?', () => (
    <code>
      notIdenticalTo('Name', 'Bob')('bob') =&gt;{' '}
      {show(notIdenticalTo('Name', 'Bob')('bob'))}
    </code>
  ))
  .add('Bob !== Bob?', () => (
    <code>
      notIdenticalTo('Name', 'Bob')('Bob') =&gt;{' '}
      {show(notIdenticalTo('Name', 'Bob')('Bob'))}
    </code>
  ))
