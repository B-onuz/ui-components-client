# ContextMenu (Component)

Componente de menu de ações vinculados a um button

## Como utilizar

```js
import ContextMenu from 'ui-components/lib/components/ContextMenu'
```

```jsx
import React from 'react'
import ContextMenu from 'ui-components/lib/components/ContextMenu'
import { Flex, Box } from 'reflexbox/styled-components'

const functionA = () => {
  console.log('Função A')
}

const functionB = () => {
  console.log('Função B')
}

const functionC = () => {
  console.log('Função C')
}

const exampleObj = [
  {
    text: 'editar',
    buttonFunction: functionA,
  },
  {
    text: 'adicionar',
    buttonFunction: functionB,
  },
  {
    text: 'excluir',
    buttonFunction: functionC,
  },
]

export const ContextMenuExample = () => (
  <Flex style={{ height: '100vh' }} width={[1]} justifyContent={'space-evenly'} alignItems={'center'}>
    <Box p={4}>
      <ContextMenu contextMenuActions={exampleObj} direction={'right'} />
    </Box>
    <Box p={4}>
      <ContextMenu contextMenuActions={exampleObj} direction={'top'} />
    </Box>
    <Box p={4}>
      <ContextMenu contextMenuActions={exampleObj} direction={'left'} />
    </Box>
    <Box p={4}>
      <ContextMenu contextMenuActions={exampleObj} direction={'bottom'} />
    </Box>
  </Flex>
)
```
