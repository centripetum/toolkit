import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Left, show } from 'sanctuary'

import combineErrors from './'

storiesOf('validation/utilities/combineErrors', module)
  .add('handle single error', () => (
    <code>
      combineErrors([Left({`{`} error: 'ERROR5' {`}`})])
      <br />
      <br />
      Expected:
      <br />
      Left ([{`{`}"error": "ERROR5"{`}`}])
      <br />
      <br />
      Actual:
      <br />
      {show(combineErrors([Left({ error: 'ERROR5' })]))}
    </code>
  ))
  .add('handle multiple errors', () => (
    <code>
      combineErrors([
      <br />
      &nbsp;&nbsp;Left({`{`} error: 'ERROR5' {`}`}),
      <br />
      &nbsp;&nbsp;Left({`{`} error: 'ERROR3' {`}`}),
      <br />
      &nbsp;&nbsp;Left({`{`} error: 'ERROR2' {`}`})
      <br />
      ])
      <br />
      <br />
      Expected:
      <br />
      Left ([{`{`}"error": "ERROR2"{`}`}, {`{`}"error": "ERROR3"{`}`}, {`{`}
      "error": "ERROR5"{`}`}])
      <br />
      <br />
      Actual:
      <br />
      {show(
        combineErrors([
          Left({ error: 'ERROR5' }),
          Left({ error: 'ERROR3' }),
          Left({ error: 'ERROR2' })
        ])
      )}
    </code>
  ))
  .add('handle duplicates', () => (
    <code>
      combineErrors([
      <br />
      &nbsp;&nbsp;Left({`{`} error: 'ERROR5' {`}`}),
      <br />
      &nbsp;&nbsp;Left({`{`} error: 'ERROR3' {`}`}),
      <br />
      &nbsp;&nbsp;Left({`{`} error: 'ERROR2' {`}`}),
      <br />
      &nbsp;&nbsp;Left({`{`} error: 'ERROR3' {`}`})
      <br />
      ])
      <br />
      <br />
      Expected:
      <br />
      Left ([{`{`}"error": "ERROR2"{`}`}, {`{`}"error": "ERROR3"{`}`}, {`{`}
      "error": "ERROR5"{`}`}])
      <br />
      <br />
      Actual:
      <br />
      {show(
        combineErrors([
          Left({ error: 'ERROR5' }),
          Left({ error: 'ERROR3' }),
          Left({ error: 'ERROR2' }),
          Left({ error: 'ERROR3' })
        ])
      )}
    </code>
  ))
  .add('handle nested errors', () => (
    <code>
      combineErrors([
      <br />
      &nbsp;&nbsp;Left({`{`} error: 'ERROR5' {`}`}),
      <br />
      &nbsp;&nbsp;Left([{`{`} error: 'ERROR3' {`}`}, Left({`{`} error: 'ERROR2'{' '}
      {`}`}]),
      <br />
      &nbsp;&nbsp;Left({`{`} error: 'ERROR3' {`}`})
      <br />
      ])
      <br />
      <br />
      Expected:
      <br />
      Left ([{`{`}"error": "ERROR2"{`}`}, {`{`}"error": "ERROR3"{`}`}, {`{`}
      "error": "ERROR5"{`}`}])
      <br />
      <br />
      Actual:
      <br />
      {show(
        combineErrors([
          Left([{ error: 'ERROR5' }]),
          Left([{ error: 'ERROR3' }, { error: 'ERROR2' }]),
          Left([{ error: 'ERROR3' }])
        ])
      )}
    </code>
  ))
