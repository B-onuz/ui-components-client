import React from 'react'
import styled from 'styled-components'
import { typography } from 'styled-system'
import Title from './Title'
import SubTitle from './SubTitle'

const StyledHeader = styled.header`
  ${typography}
  flex: 1;
  font-family: inherit;
`

const Header = ({ children, title, subTitle, textAlign = 'left', ...rest }) => {
  return (
    <StyledHeader {...rest}>
      {!!title && <Title textAlign={textAlign}>{title}</Title>}
      {!!subTitle && (
        <SubTitle textAlign={textAlign} mt={1}>
          {subTitle}
        </SubTitle>
      )}
    </StyledHeader>
  )
}

Header.defaultProps = {
  fontSize: [2, 3, 4],
}

export default Header
