import React, { useState } from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import { color } from './variants'

const StyledTooltipWrapper = styled.div`
  ${space}
  position: relative;
  display: flex;
`

const ChildrenTextWrapper = styled.div``

const TooltipTextBox = styled.div`
  ${color}
  width: max-content;
  max-width: 200px;
  position: absolute;
  border-radius: 12px;
  opacity: ${({ showTooltip }) => (showTooltip ? 1 : 0)};
  z-index: ${({ showTooltip }) => (showTooltip ? 1 : -100)};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  background: ${({ theme, color }) => `${theme.colors[color]}`} 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 6px #2c28281c;
  transition: all 300ms;
  z-index: 1000;
  ${({ direction }) => {
    if (direction === 'left') {
      return `
      right: calc(100% + 24px);
      top: -50%;
    `
    }
    if (direction === 'right') {
      return `
      left: calc(100% + 24px);
      top: -50%;
    `
    }
    if (direction === 'top') {
      return `
      left: 50%;
      transform: translateX(-50%);
      bottom: calc(100% + 1.5em);
    `
    }
    if (direction === 'bottom') {
      return `
      transform: translateX(-50%);
      left: 50%;
      top: calc(100% + 1.5em);
    `
    }
  }}
  &::after {
    content: '';
    width: 1em;
    height: 1em;
    position: absolute;
    box-shadow: 1px 2px 2px -1px #2c28281c;
    background: ${({ theme, color }) => `${theme.colors[color]}`} 0% 0%;
    ${({ direction }) => {
      if (direction === 'left') {
        return `
      right: -0.2em;
      top: 0.6em;
      transform: rotateZ(-45deg);
    `
      }
      if (direction === 'right') {
        return `
      left: -0.2em;
      top: 0.6em;
      transform: rotateZ(135deg);
    `
      }
      if (direction === 'top') {
        return `
      top: calc(100% - 0.5em);
      transform: rotateZ(45deg);
      left: 0;
      right: 0;
      margin: auto;
    `
      }
      if (direction === 'bottom') {
        return `
      bottom: calc(100% - 0.5em);
      transform: rotateZ(-135deg);
      left: 0;
      right: 0;
      margin: auto;
    `
      }
    }}
  }
`

const Tooltip = ({ children, direction, color, text, ...rest }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <StyledTooltipWrapper {...rest}>
      <ChildrenTextWrapper onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
        {children}
      </ChildrenTextWrapper>
      <TooltipTextBox color={color} direction={direction} showTooltip={showTooltip}>
        {text}
      </TooltipTextBox>
    </StyledTooltipWrapper>
  )
}

Tooltip.defaultProps = {
  color: 'primary',
  direction: 'top',
}

export default Tooltip
