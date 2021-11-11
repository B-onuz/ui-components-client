# BaseLayout (Component)

O Componente BaseLayout é usado em conjunto com o componente `Sidebar`

## Como utilizar

```js
import BaseLayout from 'ui-components/lib/components/BaseLayout'
```

```jsx
import React, { useState } from 'react'
import BaseLayout from 'ui-components/lib/components/BaseLayout'
import Sidebar from 'ui-components/lib/components/Sidebar'

const DashboardSidebar = ({ ...rest }) => {
  return (
    <SidebarMenu {...rest} logo={<Logo width={180} my={3} src={logoImg} alt={'B-onuz Logo - legal services'} />}>
      {menuItems.map((item) => {
        return <SidebarMenuItem component={'header'} icon={<FontAwesomeIcon icon={item.icon} />} children={item.text} />
      })}
    </SidebarMenu>
  )
}

const Home = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true)

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const closeMenu = () => {
    setMenuIsOpen(false)
  }

  return (
    <BaseLayout
      title={'Home page'}
      menuIsOpen={menuIsOpen}
      handleChangeMenuIsOpen={toggleMenu}
      sidebar={<DashboardSidebar open={menuIsOpen} onClose={closeMenu} width={248} />}
    >
      <h1>Lorem ipsum dolor sit amet</h1>
    </BaseLayout>
  )
}
```

## Styled-system props

- layout https://styled-system.com/table#layout
