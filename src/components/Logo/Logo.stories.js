import React from 'react'
import Logo from './Logo'
import styled from 'styled-components'
import logoImg from '../../assets/logo_white.svg'

export default {
  title: 'Logo',
  component: Logo,
}

const Wrapper = styled.div`
  padding: 18px;
  width: 180px;
  background: ${(props) => props.theme.colors['primary']};
`

export const LogoExample = () => (
  <Wrapper>
    <Logo alt={'B-onuz Logo - legal services'} width="180" src={logoImg} />
  </Wrapper>
)
