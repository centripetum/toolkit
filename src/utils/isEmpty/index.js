import { is, size } from 'sanctuary'
import $ from 'sanctuary-def'

export default function isEmpty (value) {
  if (is($.String)(value)) {
    return value === ''
  }
  if (is($.Object)(value)) {
    return size(value) === 0
  }
  if (is($.Array0)(value)) {
    return true
  }
  return false
}
