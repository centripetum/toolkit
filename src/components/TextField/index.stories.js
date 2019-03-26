import * as React from 'react'
import { storiesOf } from '@storybook/react'

import TextField from './'

storiesOf('components/TextField', module)
  .add('Basic component', () => <TextField />)
  .add('text field custom sized', () => <TextField height={500} width={500} />)
