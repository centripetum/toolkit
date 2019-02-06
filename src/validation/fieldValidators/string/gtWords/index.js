// @flow

import { Either, Left, Maybe, Right, gt, isNothing } from 'sanctuary'

import { TOO_FEW_WORDS } from '../../../errorTypes'
import createError from '../../../utilities/createError'
import wordCount from '../../../utilities/wordCount'

export default (testValue: Maybe): Function => (value: Maybe): Either =>
  isNothing(value) || gt(testValue)(wordCount(value))
    ? Right(value)
    : Left(createError(TOO_FEW_WORDS, value, testValue))
