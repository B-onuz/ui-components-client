import React from 'react'
import styled from 'styled-components'
import Color from 'color'
import { space } from 'styled-system'
import { color, size } from './variants'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import Spinner from '../Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledButton = styled.button`
  appearance: none;
  font-family: inherit;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  padding: .5rem 1rem;
  border-style: solid;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border-color: ${({ borderColor, theme }) =>
    !!theme.colors[borderColor] ? `${theme.colors[borderColor]} !important` : `${borderColor} !important`};
  ${color}
  ${size}
  ${space}
  ${(props) => (props.fullWidth && 'width: 100%;') || ''}
  box-sizing: border-box;
  &:focus {
    box-shadow: 0 0 8px ${({ theme, color }) => theme.colors[color]};
  }

  &:active:not(:disabled) {
    box-shadow: inset 0px 0px 5px #c1c1c1;
  }
  &:active,
  &:hover {
    background-color: ${({ theme, color }) => new Color(theme.colors[color]).saturate(0.1).darken(0.1).string()};
  }
  &:disabled {
    background-color: ${({ theme, color }) => new Color(theme.colors[color]).desaturate(0.4).lighten(0.1).opaquer(0.7).string()};
  }

  ${({ loading, theme }) => {
    !!loading &&
      `
    cursor: progress;
    &:hover {
      background-color: 'inherit'
      color: 'inherit';
    }
  `
  }}

  ${({ outline, theme, color }) =>
    !!outline &&
    `
    background-color: #fff;
    color: ${theme.colors[color]} !important;
    border-color: ${theme.colors[color]};
    &:hover {
      background-color: ${theme.colors[color]};
      color: ${new Color(theme.colors[color]).isDark() ? '#fff' : '#000'} !important;
    }
    `}

  ${({ underline }) =>
    !!underline
      ? `
      text-decoration: underline;
      border: none;
      outline: none;
    `
      : `text-decoration: none;`} 

  ${({ linkButton, theme, color }) =>
    !!linkButton
      ? `
    color: ${theme.colors[color]};
    border: none;
    background-color: transparent !important;
    box-shadow: none !important;
    outline: none;
    &:hover {
      text-decoration: underline;
      background-color: transparent;
    }
    `
      : `
     text-decoration: none;`}

  ${({ icon, theme }) =>
    !!icon
      ? `
    display: flex;
    align-items: center;
    padding: 0 4px;
    background-color: transparent;
    color:  ${({ color }) => (theme.colors[color] ? theme.colors[color] : color)};
    overflow: visible;
    &:hover {
      text-decoration: underline;
      background-color: transparent;
    }
  `
      : 'text-decoration: none;'}

  ${({ customIcon, theme }) =>
    !!customIcon
      ? `
    display: flex;
    align-items: center;
    overflow: visible;
    max-width: unset;
    padding: 8px;
    `
      : 'text-decoration: none;'};
`

const StyledFaIcon = styled.div`
  display: flex;
  margin-right: 4px;
  font-size: ${({ iconSize }) => iconSize};
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #e8e8e8;
  border-radius: 25px;
  padding: 8px;
  opacity: 1;
`

const StyledIcon = styled.div`
  width: ${({ imgSize }) => imgSize};
  height: ${({ imgSize }) => imgSize};
  margin-right: 6px;
  border-radius: 50%;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #e8e8e8;
  background: ${({ imgBackground }) => `url(${imgBackground}) no-repeat center center`};
  background-color: ${({ bgColor }) => bgColor};
  background-size: cover;
`

const Button = ({ children, loading, disabled, icon, iconSize, customIcon, imgSize, imgBackground, bgColor, borderColor, ...rest }) => (
  <StyledButton {...rest} disabled={!!disabled || !!loading} loading={loading} icon={icon} customIcon={imgBackground} borderColor={borderColor}>
    {icon && (
      <StyledFaIcon iconSize={iconSize}>
        <FontAwesomeIcon icon={icon} />
      </StyledFaIcon>
    )}
    {imgBackground && <StyledIcon imgBackground={imgBackground} imgSize={imgSize} bgColor={bgColor} />}
    {!!loading ? 'carregando...' : children}
  </StyledButton>
)

Button.displayName = 'Button'

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'big', 'huge']),
  color: PropTypes.string,
  ...propTypes.space,
}

Button.defaultProps = {
  size: 'medium',
  color: 'default',
  type: 'button',
  imgSize: '35px',
  bgColor: 'transparent',
}

export default Button
