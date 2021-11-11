import React from 'react'
import styled from 'styled-components'
import Label from '../Label'
import Input from '../Input'
import PropTypes from 'prop-types'
import { space, layout, compose, flexbox } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import Textarea from '../Textarea'
import FormHelperText from '../FormHelperText'

const StyledTextField = styled.div`
  display: block;
  font-family: inherit;
  ${compose(space, layout)}
  label {
    display: block;
    margin-bottom: 0.4em;
  }
`

const TextField = ({
  children,
  label,
  placeholder,
  name,
  id,
  value,
  onChange,
  required,
  error,
  inputProps = {},
  multiline,
  helperText = '',
  type = 'text',
  ...rest
}) => {
  const InputComponent = multiline ? Textarea : Input
  return (
    <StyledTextField {...rest}>
      <Label htmlFor={id} color={!!error && 'danger'} required={!!required}>
        {label}
      </Label>
      <InputComponent
        id={id}
        name={name}
        placeholder={placeholder}
        /* controlled props */
        value={value}
        onChange={onChange}
        /* validation props */
        required={!!required}
        aria-required={!!required}
        aria-invalid={!!error}
        type={type}
        error={error}
        {...inputProps}
      />
      {!!error && <FormHelperText color={'red'}>{error}</FormHelperText>}
      {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
    </StyledTextField>
  )
}

TextField.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  multiline: PropTypes.bool,
}

TextField.defaultProps = {
  required: false,
  error: false,
  multiline: false,
}

export default TextField
