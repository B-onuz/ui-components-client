import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import { color } from './variants'

const StyledChip = styled.div`
  ${space}
  display: flex;
  align-items: center;
`

const StyledText = styled.span`
  ${color}
  background: ${({ theme, color }) => `${theme.colors[color]}`};
  padding: 2px 10px 4px;
  border-radius: 25px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Chip = ({ color, text, ...rest }) => {
  return (
    <StyledChip {...rest}>
      <StyledText color={color}>{text}</StyledText>
    </StyledChip>
  )
}

export default Chip
