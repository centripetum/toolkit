import { Left, Right, isNothing, lt } from 'sanctuary'

import { TOO_MANY_WORDS } from '../../../errorTypes'
import createError from '../../../utilities/createError'
import wordCount from '../../../utilities/wordCount'

export default testValue => value =>
  isNothing(value) || lt(testValue)(wordCount(value))
    ? Right(value)
    : Left(createError(TOO_MANY_WORDS, value, testValue))
