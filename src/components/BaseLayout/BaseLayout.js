import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'
import PropTypes from 'prop-types'
import { Flex, Box } from 'reflexbox/styled-components'
import HamburguerButton from '../HamburguerButton'
import Navbar from '../NavBar'
import Header from '../Header'
import ProfileBox from '../ProfileBox'

const StyledBaseLayout = styled(Flex)`
  ${color}
  height: 100%;
`

const ChildrenWrapper = styled.div`
  flex: 1;
  padding: 0px 42px 42px 42px;
  overflow: auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1640px) {
    max-width: 1400px;
  }
  @media only screen and (max-width: 600px) {
    padding: 24px 24px 42px;
    overflow: unset;
    margin-top: 10vh;
  }
`

const LayoutContainer = styled(Box)`
  transition: margin-left 0.2s linear;
  ${({ menuIsOpen, menuWidth }) =>
    !menuIsOpen
      ? `
    margin-left: 0;
  `
      : `
    @media only screen and (min-width: 1024px) {
      margin-left: ${menuWidth}px;
    }
  `}
  @media only screen and (max-width: 768px) {
    overflow-x: hidden;
  }
`

const CornerContentWrapper = styled.div`
  height: 100%;
  width: 95%;
  align-self: flex-end;
  white-space: nowrap;
  @media only screen and (max-width: 600px) {
    width: auto;
    align-self: center;
  }
`

const BaseLayout = ({
  children,
  menuIsOpen = false,
  sidebar = null,
  cornerContent = null,
  userInfo = null,
  menuWidth = 248,
  handleChangeMenuIsOpen,
  title,
  ...rest
}) => {
  return (
    <StyledBaseLayout {...rest}>
      {sidebar}
      <LayoutContainer display={'flex'} flexDirection={'column'} flex={1} menuWidth={menuWidth} menuIsOpen={menuIsOpen}>
        <Navbar>
          {!!sidebar && (
            <HamburguerButton backgroundColor={'#FFFFFF'} isOpen={!!sidebar ? menuIsOpen : false} onClick={handleChangeMenuIsOpen} color={'primary'}>
              {!open ? 'Abrir menu' : 'Fechar menu'}
            </HamburguerButton>
          )}
          <Header title={title || ''} />
          {!!cornerContent && <CornerContentWrapper>{cornerContent}</CornerContentWrapper>}
        </Navbar>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </LayoutContainer>
    </StyledBaseLayout>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

BaseLayout.defaultProps = {
  /*todo: defaultProps*/
}

export default BaseLayout
