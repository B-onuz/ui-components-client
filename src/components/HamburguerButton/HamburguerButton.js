import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'

const StyledHamburguerButton = styled.button`
  width: 35px;
  height: 26px;
  border: none;
  position: relative;
  background: linear-gradient(to bottom, #F14F5C, #F14F5C);
  background-size: 100% 20%;
  background-repeat: no-repeat;
  background-position: center center;
  transition: background-size 0.2s 0.25s ease;
  outline: none;
  cursor: pointer;
  transform: scale(0.6);
  transition: background-size 0.3s 0.2s ease;
  &:before,
  &:after {
    height: 20%;
    width: 100%;
    position: absolute;
    left: 0;
    background-color: #F14F5C;
    content: '';
    transition: transform 0.3s ease;
  }
  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }
  &:before,
  &:after {
    transition: 0.3s ease;
  }
  ${(props) =>
    props.isOpen &&
    `
      // background-size: 0 0;
      &:before,
      &:after {
        transition-delay: 0.3s;
      }
      // &:before {
      //   transform: translateY(200%) rotate(45deg);
      // }
      // &:after {
      //   transform: translateY(-200%) rotate(-45deg);
      // }
    `}
`

const Arrow = styled.i`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: -5px;
  transition: 0.15s linear;
  transition-delay: 0.35s;
  transform: rotate(135deg) scale(0);
  opacity: 0.3;
  transform-origin: center center;
  z-index: 10;
  width: 15px;
  height: 15px;
  ${(props) =>
    props.isOpen &&
    ` opacity: 1;
      transform: rotate(0) scale(1);
    `}
  &::after, &::before {
    content: '';
    border: solid;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  &::before {
    z-index: 1;
    border-width: 8px 8px 8px 8px;
    border-color: ${(props) => props.backgroundColor};
    background: ${(props) => props.backgroundColor};
    margin-top: -5px;
    margin-left: -2px;
    border-radius: 4px;
    margin-right: -8px;
  }
  &::after {
    z-index: 2;
    border-color: #F14F5C;
  }
`

const HamburguerButton = ({ isOpen = false, children, backgroundColor = '#fff', ...rest }) => {
  return (
    <StyledHamburguerButton isOpen={isOpen} {...rest}>
      <Arrow className="arrow left" isOpen={isOpen} backgroundColor={backgroundColor} />
    </StyledHamburguerButton>
  )
}

export default HamburguerButton
