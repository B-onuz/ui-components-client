import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

const SwitchToggle = styled.div`
  display: block;
  background: #fff;
  position: relative;
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 20px;
  width: 20px;
  top: 0;
  display: block;
  transform: translate(25px);
  transition: 0.2s;
  z-index: 2;
`

const SwitchBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  transform: translate(calc(-55% - 25px));
  transition: 0.25s ease-out;
  opacity: 0;
`

const Wrapper = styled.label`
  border-color: rgb(223, 223, 223);
  box-shadow: rgb(223, 223, 223) 1px 1px 3px 0px inset;
  transition: border 0.4s, box-shadow 0.4s;
  background-color: #f7f7f7;
  border: 1px solid #dfdfdf;
  border-radius: 20px;
  cursor: pointer;
  display: inline-block;
  height: 20px;
  position: relative;
  vertical-align: middle;
  width: 40px;
  user-select: none;
  overflow: hidden;
  box-sizing: content-box;
  background-clip: content-box;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  ${space}
  ${(props) => {
    if (props.loading) {
      return `
          opacity: .5;
      `
    }
  }}
  input {
    display: none;
    & + ${SwitchToggle} {
      transform: translate(0);
    }

    &:checked + ${SwitchToggle} {
      transform: translate(calc(50% + 10px));
    }

    &:checked ~ ${SwitchBg} {
      background: ${({ theme, color }) => theme.colors[color]};
      opacity: 1;
      transform: translate(0);
    }
  }
`

const Switch = (props) => {
  const { onChange, checked, id, loading = false, color = 'primary', ...rest } = props
  return (
    <Wrapper htmlFor={id} loading={loading} color={color} {...rest}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} {...rest} />
      <SwitchToggle color={color} loading={loading} />
      <SwitchBg color={color} />
    </Wrapper>
  )
}

export default Switch
