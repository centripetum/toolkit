import * as React from 'react'
import { storiesOf } from '@storybook/react'

import styled from 'styled-components'

import { Field } from '../src'

const InjectedButton = styled.button`
  background-color: ${({ bgndColor, disabled }) => (disabled ? 'LightGray' : bgndColor)};
  border: 1px solid ${({ disabled }) => (disabled ? 'DarkGray' : 'DarkSeaGreen')};
  color: White;
  font-size: 1.2rem;
  padding: 0.5rem;
`
InjectedButton.displayName = 'InjectedButton'

const InjectedLabel = styled.label`
  background-color: Cornsilk;
  color: DarkSlateBlue;
  font-family: sans-serif;
  font-size: 1.2rem;
  padding: 0.5rem;
`
InjectedLabel.displayName = 'InjectedLabel'

const InjectedInput = styled.input`
  background-color: Cornsilk;
  border: 1px solid Gray;
  color: Crimson;
  font-size: 1.2rem;
  padding: 0.5rem;
`
InjectedInput.displayName = 'InjectedInput'


const onSave = (name, value) => alert(`Saving ${name}: "${value}"`)

storiesOf('Field', module)
  .add('with everything (logged)', () => (
    <Field
      defaultValue='Everything and log'
      handleChange={console.log}
      labelText='Message'
      name='message'
      onSave={onSave}
    />
  ))
  .add('with everything', () => (
    <Field
      defaultValue='Everything'
      labelText='Message'
      name='message'
      onSave={onSave}
    />
  ))
  .add('no label', () => (
    <Field
      defaultValue='Everything'
      labelText='Message'
      name='message'
      noLabel
      onSave={onSave}
    />
  ))
  .add('no clear', () => (
    <Field
      defaultValue='No clear'
      labelText='Message'
      name='message'
      noClear
    />
  ))
  .add('no reset', () => (
    <Field
      defaultValue='No reset'
      labelText='Message'
      name='message'
      noReset
    />
  ))
  .add('no undo/redo', () => (
    <Field
      defaultValue='No undo/redo'
      labelText='Message'
      name='message'
      noUndoRedo
    />
  ))
  .add('nothing', () => (
    <Field
      defaultValue='Nothing at all'
      labelText='Message'
      name='message'
      noClear
      noLabel
      noReset
      noUndoRedo
    />
  ))
  .add('with save', () => (
    <Field
      defaultValue='Save me'
      labelText='Message'
      name='message'
      noClear
      noReset
      noUndoRedo
      onSave={onSave}
    />
  ))
  .add('injected label', () => (
    <Field
      defaultValue='Save me'
      label={name => <InjectedLabel htmlFor={name}>Message</InjectedLabel>}
      name='message'
      noClear
      noReset
      noUndoRedo
    />
  ))
  .add('injected label/input', () => (
    <Field
      defaultValue='Save me'
      label={name => <InjectedLabel htmlFor={name}>Message</InjectedLabel>}
      input={(name, onChange, value) => <InjectedInput type='email' name={name} onChange={onChange} value={value} />}
      name='message'
      noClear
      noReset
      noUndoRedo
    />
  ))
  .add('injected everything', () => (
    <Field
      defaultValue='Save me'
      label={name => <InjectedLabel htmlFor={name}>Message</InjectedLabel>}
      input={(name, onChange, value) => <InjectedInput type='email' name={name} onChange={onChange} value={value} />}
      name='message'
      redoButton={(onClick, disabled) =>
        <InjectedButton onClick={onClick} disabled={disabled} bgndColor='SeaGreen'>REDO</InjectedButton>}
      undoButton={(onClick, disabled) =>
        <InjectedButton onClick={onClick} disabled={disabled} bgndColor='Crimson'>UNDO</InjectedButton>}
      clearButton={(onClick, disabled) =>
        <InjectedButton onClick={onClick} disabled={disabled} bgndColor='SlateBlue'>CLEAR</InjectedButton>}
      resetButton={(onClick, disabled) =>
        <InjectedButton onClick={onClick} disabled={disabled} bgndColor='Teal'>RESET</InjectedButton>}
      saveButton={(onClick, disabled) =>
        <InjectedButton onClick={onClick} disabled={disabled} bgndColor='Fuchsia'>SAVE</InjectedButton>}
      onSave={onSave}
    />
  ))
