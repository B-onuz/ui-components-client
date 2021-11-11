import React from 'react'
import styled from 'styled-components'
import { space, layout, compose } from 'styled-system'

const StyledBox = styled.div`
  ${compose(space, layout)}
  box-shadow: ${({ noBorder }) => (noBorder ? 'none' : '0px 3px 6px #2c282846')};
  background: ${({ noBorder }) => (noBorder ? 'none' : '#ffffff 0% 0% no-repeat padding-box')};
  padding: ${({ noBorder }) => (noBorder ? '0' : '10px')};
  border-radius: 10px;
  display: ${({ display }) => display};
  flex: ${({ flex }) => flex};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
`

const Box = ({ display, justifyContent, flexDirection, alignItems, flex, noBorder, ...rest }) => {
  return (
    <StyledBox
      noBorder={!!noBorder}
      display={display}
      justifyContent={justifyContent}
      flexDirection={flexDirection}
      alignItems={alignItems}
      flex={flex}
      {...rest}
    />
  )
}

export default Box
