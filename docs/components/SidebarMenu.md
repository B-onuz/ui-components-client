# SidebarMenu (Component)

Barra lateral com menu de navegação usado em conjunto com o componente `BaseLayout`

## Como utilizar

```js
import SidebarMenu from 'ui-components/lib/components/SidebarMenu'
```

```jsx
import React from 'react'
import SidebarMenu from 'ui-components/lib/components/SidebarMenu'
import SidebarMenuItem from 'ui-components/lib/components/SidebarMenuItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faDice, faCodeBranch, faAdjust, faKey } from '@fortawesome/free-solid-svg-icons'

const menuItems = [
  { icon: faHome, text: 'Home' },
  { icon: faDice, text: 'Dados' },
  { icon: faCodeBranch, text: 'Branch' },
  { icon: faAdjust, text: 'Adjusts Darkmode' },
  { icon: faKey, text: 'Chaves de acesso' },
]

export const SidebarMenuExample = () => (
  <SidebarMenu open={true}>
    {menuItems.map((item) => {
      return <SidebarMenuItem component={'header'} icon={<FontAwesomeIcon icon={item.icon} />} children={item.text} />
    })}
  </SidebarMenu>
)
```
