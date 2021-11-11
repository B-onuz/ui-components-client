import React from 'react'
import styled from 'styled-components'
import { typography, color, space, compose } from 'styled-system'

const StyledTypography = styled.p`
  ${compose(typography, color, space)}
  white-space: pre-line;
`

const Typography = ({ children, ...rest }) => {
  return <StyledTypography {...rest} children={children} />
}

export default Typography
