import * as React from 'react'
import { storiesOf } from '@storybook/react'

import ThreeStateField from './'

const trueField = 'Yes'
const falseField = 'No'

storiesOf('components/ThreeStateField', module).add('Basic component', () => (
  <ThreeStateField trueField={trueField} falseField={falseField} />
))
