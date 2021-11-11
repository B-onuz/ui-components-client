import React from 'react'
import styled from 'styled-components'
import { space, layout, compose } from 'styled-system'

const StyledSpinner = styled.div`
  display: inline-flex;
  &,
  &:after {
    border-radius: 50%;
    width: 2em;
    height: 2em;
  }
  font-size: 10px;
  vertical-align: middle;
  position: relative;
  text-indent: -9999em;
  border-top: 2px solid ${({ theme, color }) => `${theme.colors[color]}`};
  border-right: 2px solid ${({ theme, color }) => `${theme.colors[color]}`};
  border-bottom: 2px solid ${({ theme, color }) => `${theme.colors[color]}`};
  border-left: 2px solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 0.5s infinite linear;
  ${compose(space, layout)}
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`

const Spinner = ({ children, ...rest }) => {
  return <StyledSpinner {...rest} />
}

export default Spinner
