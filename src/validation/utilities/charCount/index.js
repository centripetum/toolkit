// @flow

import { Nothing, maybe, pipe, prop, toMaybe } from 'sanctuary'

/**
 * Takes a Maybe&lt;string&gt; of characters and returns a Maybe&lt;number&gt; with the
 * **character count** for the string.
 */
export default function charCount (value: Maybe = Nothing): Maybe {
  return maybe(Nothing)(pipe([prop('length'), toMaybe]))(value)
}
