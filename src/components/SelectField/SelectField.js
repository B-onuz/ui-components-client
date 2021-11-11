import React from 'react'
import styled from 'styled-components'
import Label from '../Label'
import Select from '../Select'
import FormHelperText from '../FormHelperText'
import PropTypes from 'prop-types'
import { space, layout, compose, flexbox } from 'styled-system'
import propTypes from '@styled-system/prop-types'

const StyledSelectField = styled.div`
  display: block;
  font-family: inherit;
  ${compose(space, layout)}
  label {
    display: block;
    margin-bottom: 0.4em;
  }
`

const SelectField = ({ children, label, placeholder, name, id, value, onChange, required, error, helperText, inputProps = {}, ...rest }) => {
  return (
    <StyledSelectField {...rest}>
      <Label htmlFor={id} color={!!error && 'danger'} required={!!required}>
        {label}
      </Label>
      <Select
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
        error={error}
        {...inputProps}
      >
        {children}
      </Select>
      {!!error && <FormHelperText color={'red'}>{error}</FormHelperText>}
      {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
    </StyledSelectField>
  )
}

SelectField.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  multiline: PropTypes.bool,
}

SelectField.defaultProps = {
  required: false,
  error: false,
  multiline: false,
}

export default SelectField
