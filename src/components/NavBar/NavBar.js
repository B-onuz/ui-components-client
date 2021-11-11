import React from 'react'
import styled from 'styled-components'

const StyledNavBar = styled.div`
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  padding: 20px 40px 10px 40px;
  box-sizing: border-box;
  flex-shrink: 0;
  @media only screen and (max-width: 600px) {
    height: auto;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 2vh;
    position: fixed;
    width: 100%;
    z-index: 1000;
    flex-wrap: wrap;
    & > header {
      max-width: 85%;
      & > h1 {
        max-width: 100%;
        margin-bottom: 8px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    & > button {
      position: absolute;
      right: 8px;
    }
  }
`

const NavBar = ({ ...rest }) => {
  return <StyledNavBar {...rest} />
}

export default NavBar