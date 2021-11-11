import React from 'react'
import SidebarMenu from './SidebarMenu'
import SidebarMenuItem from '../SidebarMenuItem'
import Button from '../Button'
import shortid from 'shortid'
import { Box, Flex } from 'reflexbox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faDice, faCodeBranch, faAdjust, faKey, faPhone } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'SidebarMenu',
  component: SidebarMenu,
}

const menuItems = [
  { icon: faHome, text: 'Home' },
  { icon: faDice, text: 'Dados' },
  { icon: faCodeBranch, text: 'Branch' },
  { icon: faAdjust, text: 'Adjusts Darkmode' },
  { icon: faKey, text: 'Chaves de acesso' },
  { icon: faHome, text: 'Home' },
  { icon: faDice, text: 'Dados' },
  { icon: faCodeBranch, text: 'Branch' },
  { icon: faAdjust, text: 'Adjusts Darkmode' },
  { icon: faKey, text: 'Chaves de acesso' },
]

export const SidebarMenuExample = () => (
  <SidebarMenu
    open={true}
    contactButton={
      <Button style={{ backgroundColor: 'transparent' }} color="white" outline m={3}>
        <Flex alignItems="center">
          <Box mr={2}>
            <FontAwesomeIcon icon={faPhone} color="#4AB77C" size="lg" />
          </Box>
          <Flex width={1} justifyContent="center">
            +11 22 33333-3333
          </Flex>
        </Flex>
      </Button>
    }
    logoutHref={'google.com'}
  >
    {menuItems.map((item) => {
      return (
        <SidebarMenuItem
          key={`${item.text}-${shortid.generate()}`}
          component={'header'}
          icon={<FontAwesomeIcon icon={item.icon} />}
          children={item.text}
        />
      )
    })}
  </SidebarMenu>
)

export const SidebarMenuOnlyMobile = () => (
  <SidebarMenu
    open={true}
    onlyMobile
    contactButton={
      <Button style={{ backgroundColor: 'transparent' }} color="white" outline m={3}>
        <Flex alignItems="center">
          <Box mr={2}>
            <FontAwesomeIcon icon={faPhone} color="#4AB77C" size="lg" />
          </Box>
          <Flex width={1} justifyContent="center">
            +11 22 33333-3333
          </Flex>
        </Flex>
      </Button>
    }
  >
    {menuItems.map((item) => {
      return (
        <SidebarMenuItem
          key={`${item.text}-${shortid.generate()}`}
          component={'header'}
          icon={<FontAwesomeIcon icon={item.icon} />}
          children={item.text}
        />
      )
    })}
  </SidebarMenu>
)
