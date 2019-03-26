import React from 'react'

const enterActions = {
  submit: () => 'pretend that this function submits',
  nothing: undefined
}

const altEnterActions = {
  nothing: undefined,
  lineBreak: () => 'pretend this makes a line break'
}

export default function textField (props) {
  const {
    characterLimitOn = false,
    resize = 'none',
    onChange = () => undefined,
    validator = () => true,
    width = 200,
    height = 50,
    text = 'this is the default text'
  } = props
  const enterAction = props.enterAction
    ? enterActions[props.enterAction]
    : enterActions['submit']
  // enter action will default to submit if enterAction in props is undefined

  const altEnterAction = props.altEnterAction
    ? altEnterActions[props.altEnterAction]
    : altEnterActions['nothing']
  // altEnter action will default to submit if enterAction in props is undefined

  return (
    <React.Fragment>
      <textarea style={{ width, height, resize }}>{text}</textarea>
    </React.Fragment>
  )
}
