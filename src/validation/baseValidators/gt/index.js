import { Left, Right, gt } from 'sanctuary'

import { NOT_GT } from '../../errorTypes'

export default (testValue = Infinity) => value =>
  gt(testValue)(value)
    ? Right(value)
    : Left([
        {
          testValue,
          value,
          errorType: NOT_GT
        }
      ])
