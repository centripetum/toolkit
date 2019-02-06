// @flow

import { Maybe, Nothing, maybe, pipe, prop, toMaybe, words } from 'sanctuary'

/**
 * Takes a Maybe&lt;string&gt; of characters and returns a Maybe&lt;number&gt; with the
 * **word count** for the string.
 */
export default function wordCount (value: Maybe = Nothing): Maybe {
  return maybe(Nothing)(pipe([words, prop('length'), toMaybe]))(value)
}
