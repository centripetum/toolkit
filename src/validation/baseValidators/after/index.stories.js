import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { parseDate, show } from 'sanctuary'

import after from './'

const beforeDate = '2001-01-01'
const afterDate = '2049-01-01'

storiesOf('validation/validators/after', module).add(
  `${beforeDate} after ${afterDate}?`,
  () => (
    <code>
      after({`{`} name: 'Test date', date: '{afterDate}' {`}`})('{beforeDate}')
      =&gt;{' '}
      {show(
        after({ name: 'Test date', date: parseDate(afterDate) })(beforeDate)
      )}
    </code>
  )
)
