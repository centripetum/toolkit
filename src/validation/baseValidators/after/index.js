import dayjs from 'dayjs'
import {
  Left,
  Right,
  equals,
  isJust,
  isNothing,
  max,
  maybeToNullable,
  parseDate
} from 'sanctuary'

import { END_OF_TIME } from '../../constants'

function makeDefaultError (name, value) {
  return `${name} must be after ${value}.`
}

export default function (config = {}) {
  const {
    name = 'This field',
    date = END_OF_TIME,
    makeError = makeDefaultError,
    dateFormat = 'D MMM YYYY'
  } = config
  const beforeDate = equals(typeof date)('string') ? parseDate(date) : date

  return (value = '') => {
    const dateToTest = equals(typeof value)('string') ? parseDate(value) : value

    return isNothing(dateToTest)
      ? Left([`${name} is not a valid date.`])
      : equals(dateToTest)(max(beforeDate)(dateToTest))
      ? Right(value)
      : Left([
          makeError(name, dayjs(maybeToNullable(beforeDate)).format(dateFormat))
        ])
  }
}
