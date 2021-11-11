import React, { useState } from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'
import Button from '../Button'

const StyledTabSelector = styled.div`
  ${color}
  @media only screen and (max-width: 500px) {
    min-width: 180px;
  }
`

const ButtonsWrapper = styled.div`
  display: inline-block;
  border-radius: 25px;
  overflow: hidden;
  border: 2px solid ${({ theme, color }) => `${theme.colors[color]}`};
  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    border-radius: 12px;
  }
`

const TabSelector = ({ activeA, activeB, optionA, optionB, color, handleClick, ...rest }) => {
  return (
    <StyledTabSelector {...rest}>
      <ButtonsWrapper color={color}>
        <Button linkButton={!activeA} color={color} py={1} style={{ borderRadius: 0 }} onClick={handleClick}>
          {optionA}
        </Button>
        <Button linkButton={!activeB} color={color} py={1} style={{ borderRadius: 0 }} onClick={handleClick}>
          {optionB}
        </Button>
      </ButtonsWrapper>
    </StyledTabSelector>
  )
}

export default TabSelector
