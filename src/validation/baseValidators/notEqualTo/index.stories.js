import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { show } from 'sanctuary'

import notEqualTo from './'

storiesOf('validation/validators/notEqualTo', module)
  .add('19 != 20?', () => (
    <code>
      notEqualTo('Age', 19)(20) =&gt; {show(notEqualTo('Age', 19)(20))}
    </code>
  ))
  .add('20 != 20?', () => (
    <code>
      notEqualTo('Age', 20)(20) =&gt; {show(notEqualTo('Age', 20)(20))}
    </code>
  ))
  .add('21 != 20?', () => (
    <code>
      notEqualTo('Age', 20)(21) =&gt; {show(notEqualTo('Age', 20)(21))}
    </code>
  ))
  .add('Bob != bob?', () => (
    <code>
      notEqualTo('Name', 'Bob')('bob') =&gt;{' '}
      {show(notEqualTo('Name', 'Bob')('bob'))}
    </code>
  ))
  .add('Bob != Bob?', () => (
    <code>
      notEqualTo('Name', 'Bob')('Bob') =&gt;{' '}
      {show(notEqualTo('Name', 'Bob')('Bob'))}
    </code>
  ))
  .add('7 != "7"?', () => (
    <code>
      notEqualTo('Age', 7)('7') =&gt; {show(notEqualTo('Age', 7)('7'))}
    </code>
  ))
