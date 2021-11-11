import React from 'react'
import styled from 'styled-components'
import { space, layout, compose } from 'styled-system'

const LogoImg = styled.img`
  display: block;
  margin: auto;
  ${compose(space, layout)}
`

const Logo = ({ children, src, ...rest }) => {
  return <LogoImg src={src} {...rest} />
}

export default Logo
