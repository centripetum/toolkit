import * as React from 'react'
import { storiesOf } from '@storybook/react'

import ThreeStateField from './'

const field1 = 'Yes'
const field2 = 'No'

storiesOf('components/ThreeStateField', module).add('Basic component', () => (
  <ThreeStateField field1={field1} field2={field2} />
))
