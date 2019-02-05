import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { show } from 'sanctuary'

import gt from '../gt'
import gte from '../gte'
import lt from '../lt'
import lte from '../lte'

import or from './'

storiesOf('validation/validators/or', module)
  .add('Yes && Yes === Yes', () => (
    <code>
      or(gt('n', 3), lte('n', 9))(5) === {show(or(gt('n', 3), lte('n', 9))(5))}
    </code>
  ))
  .add('Yes && No === Yes', () => (
    <code>
      or(gt('n', 3), lte('n', 9))(10) ==={' '}
      {show(or(gt('n', 3), lte('n', 9))(10))}
    </code>
  ))
  .add('No && Yes === Yes', () => (
    <code>
      or(gte('n', 3), lte('n', 9))(1) ==={' '}
      {show(or(gte('n', 3), lte('n', 9))(1))}
    </code>
  ))
  .add('No && No === No', () => (
    <code>
      or(gt('n', 30), lt('n', 20))(25) ==={' '}
      {show(or(gt('n', 30), lt('n', 20))(25))}
    </code>
  ))
  .add('Duplicate errors', () => (
    <code>
      or(gt('n', 3), lte('n', 9))(NaN) ==={' '}
      {show(or(gt('n', 3), lte('n', 9))(NaN))}
    </code>
  ))
  .add('Multiple duplicate errors', () => (
    <code>
      gt('n', 30)(10) is ${show(gt('n', 30)(10))}
      <br />
      <br />
      lte('n', 9)(10) is ${show(lte('n', 9)(10))}
      <br />
      <br />
      or(gt('n', 30), lte('n', 9), gt('n', 30), lte('n', 9))(10) ==={' '}
      {show(or(gt('n', 30), lte('n', 9), gt('n', 30), lte('n', 9))(10))}
    </code>
  ))
