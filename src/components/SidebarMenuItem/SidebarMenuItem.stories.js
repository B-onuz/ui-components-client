import React from 'react'
import SidebarMenuItem from './SidebarMenuItem'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'SidebarMenuItem',
  component: SidebarMenuItem,
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  background: ${(props) => props.theme.colors.primary};
`

export const SidebarMenuItemExample = () => (
  <List>
    <SidebarMenuItem icon={<FontAwesomeIcon icon={faHome} />}>Menu Item</SidebarMenuItem>
  </List>
)
