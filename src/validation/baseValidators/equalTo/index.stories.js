import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { show } from 'sanctuary'

import equalTo from './'

storiesOf('validation/validators/equalTo', module)
  .add('19 == 20?', () => (
    <code>equalTo('Age', 19)(20) =&gt; {show(equalTo('Age', 19)(20))}</code>
  ))
  .add('20 == 20?', () => (
    <code>equalTo('Age', 20)(20) =&gt; {show(equalTo('Age', 20)(20))}</code>
  ))
  .add('21 == 20?', () => (
    <code>equalTo('Age', 20)(21) =&gt; {show(equalTo('Age', 20)(21))}</code>
  ))
  .add('Bob == bob?', () => (
    <code>
      equalTo('Name', 'Bob')('bob') =&gt; {show(equalTo('Name', 'Bob')('bob'))}
    </code>
  ))
  .add('Bob == Bob?', () => (
    <code>
      equalTo('Name', 'Bob')('Bob') =&gt; {show(equalTo('Name', 'Bob')('Bob'))}
    </code>
  ))
  .add('7 == "7"?', () => (
    <code>equalTo('Age', 7)('7') =&gt; {show(equalTo('Age', 7)('7'))}</code>
  ))
