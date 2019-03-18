import * as React from 'react'
import { storiesOf } from '@storybook/react'

import ThreeStateField from './'

storiesOf('components/ThreeStateField', module).add('Basic component', () => (
  <ThreeStateField />
))
