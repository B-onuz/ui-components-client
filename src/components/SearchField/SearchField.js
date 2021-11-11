import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'
import Input from '../Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { space, compose, layout } from 'styled-system'
import theme from '../../theme/'

const StyledSearchField = styled(Input)`
  flex: 1;
  background-color: transparent;
  padding-right: 32px;
  &:focus {
    background-color: #fff;
  }
`

const Wrapper = styled.div`
  ${compose(space, layout)}
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 6px;
`

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};
`

const SearchField = ({ children, ...rest }) => {
  return (
    <Wrapper>
      <StyledSearchField placeholder="Pesquisar" {...rest} />
      <Icon icon={faSearch} />
    </Wrapper>
  )
}

export default SearchField
