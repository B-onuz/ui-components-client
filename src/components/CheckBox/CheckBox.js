import React from 'react'
import styled from 'styled-components'

const StyledCheckBox = styled.div`
  display: flex;
  align-items: flex-start;
`

const FakeCheckBox = styled.label`
  display: inline-block;
  width: 17px;
  height: 17px;
  border: 1px solid #d4d4d5;
  border-radius: 4px;
  margin-right: 10px;
  position: relative;
  flex-shrink: 0;
  cursor: pointer;
`

const CheckboxLabel = styled.label`
  cursor: pointer;
`

const CheckIcon = styled.div`
  position: absolute;
  margin: auto;
  left: -2px;
  right: 0;
  top: calc(50% + 40);
  width: 0;
  height: 0;
  border: none;
  transform: rotate(-45deg);
  transform-origin: top left;
  margin-top: 10px;
  @keyframes start {
    0% {
      opacity: 0;
      width: 0;
      height: 0;
    }

    50% {
      opacity: 1;
      width: 0;
      height: 5px;
    }
    100% {
      width: 10px;
    }
  }
`

const RealCheckBox = styled.input`
  &:checked {
    & ~ ${FakeCheckBox} {
      border: 1px solid #95c8da;
      ${CheckIcon} {
        animation: start 0.4s ease both;
        animation-play-state: running !important;
        width: 10px;
        height: 5px;
        border: solid 2px #0c0c0c;
        border-top: none;
        border-right: none;
      }
    }
  }
`

const CheckBox = ({ children, id, label, ...rest }) => {
  return (
    <StyledCheckBox>
      <RealCheckBox id={id} type="checkbox" style={{ display: 'none' }} {...rest} />
      <FakeCheckBox htmlFor={id}>
        <CheckIcon />
      </FakeCheckBox>
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </StyledCheckBox>
  )
}

export default CheckBox
