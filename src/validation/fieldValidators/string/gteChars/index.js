// @flow

import { Either, Left, Maybe, Right, gte, isNothing } from 'sanctuary'

import { TOO_FEW_CHARACTERS } from '../../../errorTypes'
import charCount from '../../../utilities/charCount'
import createError from '../../../utilities/createError'

export default (testValue: Maybe): Function => (value: Maybe): Either =>
  isNothing(value) || gte(testValue)(charCount(value))
    ? Right(value)
    : Left(createError(TOO_FEW_CHARACTERS, value, testValue))
