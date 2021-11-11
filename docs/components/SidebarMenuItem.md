# SidebarMenuItem (Component)

É utilizado para um Item de uma lista de menu, em conjunto com alguma tag de lista `ul`, `ol` ou relacionados.

## Como utilizar

```js
import SidebarMenuItem from 'ui-components/lib/components/SidebarMenuItem'
```

```jsx
import React from 'react'
import SidebarMenuItem from 'ui-components/lib/components/SidebarMenuItem'
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
    <SidebarMenuItem icon={<FontAwesomeIcon icon={faHome} />}>Menu Item 1</SidebarMenuItem>
    <SidebarMenuItem icon={<FontAwesomeIcon icon={faHome} />}>Menu Item 2</SidebarMenuItem>
    <SidebarMenuItem icon={<FontAwesomeIcon icon={faHome} />}>Menu Item 3</SidebarMenuItem>
  </List>
)
```
