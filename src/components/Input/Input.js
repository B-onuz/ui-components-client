import React from 'react'
import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'
import { size } from './variants'
import Color from 'color'

const StyledInput = styled.input`
  border: 1px solid #dededf;
  border-radius: 4px;
  line-height: 2.1em;
  outline: none;
  padding-right: 1em;
  padding-left: 1em;
  width: 100%;
  box-sizing: border-box;
  &::placeholder {
    letter-spacing: 0px;
    color: #b5b5b5;
  }
  &:focus {
    box-shadow: 0 0 3px
      ${({ theme, color, error }) => (error ? new Color(theme.colors['red']).fade(0.5).string() : new Color(theme.colors[color]).fade(0.5).string())};
    border-color: ${({ theme, color, error }) => (error ? new Color(theme.colors['red']).string() : theme.colors[color])};
  }
  ${({ error, theme }) =>
    !!error &&
    `
      box-shadow: 0 0 3px ${new Color(theme.colors['red']).fade(0.5).string()};
      border: 1px solid ${theme.colors['red']};
    `}
  ${size}
`

const Input = ({ children, ...rest }) => {
  return <StyledInput {...rest} />
}

Input.propTypes = {
  ...propTypes.size,
}

Input.defaultProps = {
  size: 'medium',
  color: 'blue',
}

export default Input
