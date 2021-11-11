import React from 'react'
import styled from 'styled-components'
import Spinner from '../Spinner'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.6);
  z-index: 999;
  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
`

export default () => {
  return (
    <Wrapper>
      <Spinner color={'primary'} />
    </Wrapper>
  )
}
