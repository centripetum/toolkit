// @flow

import { Either, Left, Maybe, Right, gt, isNothing } from 'sanctuary'

import { TOO_FEW_CHARACTERS } from '../../../errorTypes'
import charCount from '../../../utilities/charCount'
import createError from '../../../utilities/createError'

export default (testValue: Maybe): Function => (value: Maybe): Either =>
  isNothing(value) || gt(testValue)(charCount(value))
    ? Right(value)
    : Left(createError(TOO_FEW_CHARACTERS, value, testValue))
