import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import { size } from './variants'
import Color from 'color'

const StyledSelect = styled.select`
  border: 1px solid #dededf;
  appearance: none;
  line-height: inherit;
  border-radius: 4px;
  line-height: 2.1em;
  outline: none;
  padding-right: 2em;
  padding-left: 1em;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTc2cHgiIGhlaWdodD0iOTBweCIgdmlld0JveD0iMCAwIDE3NiA5MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5UcmlhbmdsZTwvdGl0bGU+CiAgICA8ZyBpZD0iV2VsY29tZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFydGJvYXJkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYuMDAwMDAwLCAtNy4wMDAwMDApIiBmaWxsPSIjNEQ0RDREIj4KICAgICAgICAgICAgPHBhdGggZD0iTTEwNS40MTQyMTQsOC40MTQyMTM1NiBMMTkwLjU4NTc4Niw5My41ODU3ODY0IEMxOTEuMzY2ODM1LDk0LjM2NjgzNSAxOTEuMzY2ODM1LDk1LjYzMzE2NSAxOTAuNTg1Nzg2LDk2LjQxNDIxMzYgQzE5MC4yMTA3MTQsOTYuNzg5Mjg2MyAxODkuNzAyMDA2LDk3IDE4OS4xNzE1NzMsOTcgTDE4LjgyODQyNzEsOTcgQzE3LjcyMzg1NzYsOTcgMTYuODI4NDI3MSw5Ni4xMDQ1Njk1IDE2LjgyODQyNzEsOTUgQzE2LjgyODQyNzEsOTQuNDY5NTY3IDE3LjAzOTE0MDgsOTMuOTYwODU5MiAxNy40MTQyMTM2LDkzLjU4NTc4NjQgTDEwMi41ODU3ODYsOC40MTQyMTM1NiBDMTAzLjM2NjgzNSw3LjYzMzE2NDk4IDEwNC42MzMxNjUsNy42MzMxNjQ5OCAxMDUuNDE0MjE0LDguNDE0MjEzNTYgWiIgaWQ9IlRyaWFuZ2xlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDQuMDAwMDAwLCA1Mi4wMDAwMDApIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC0xMDQuMDAwMDAwLCAtNTIuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==');
  background-repeat: no-repeat, repeat;
  cursor: pointer;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  text-overflow: ellipsis;
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

const Select = ({ ...rest }) => {
  return <StyledSelect {...rest} />
}

Select.propTypes = {
  ...propTypes.size,
}

Select.defaultProps = {
  size: 'medium',
  color: 'blue',
}

export default Select
