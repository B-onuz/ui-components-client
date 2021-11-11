# BreadCrumb (Component)

Componente de Breadcrumbs

## Como utilizar

```js
import BreadCrumb from 'ui-components/lib/components/BreadCrumb'
```

```jsx
import React from 'react'
import BreadCrumb from './BreadCrumb'
import { Flex, Box } from 'reflexbox'

const exampleObj = [
  {
    label: 'Gestão da rota do Link 1',
    onClick: () => ({}),
  },
  {
    label: 'Gestão da rota do Link 2',
    onClick: () => ({}),
  },
  {
    label: 'Gestão da rota do Link 3',
    onClick: () => ({}),
  },
  {
    label: 'Gestão da rota do Link 4',
    onClick: () => ({}),
  },
]

export const BreadCrumbColors = () => (
  <Flex flexDirection={'column'}>
    <Box>
      <BreadCrumb navigationLinks={exampleObj} color={'primary'} />
    </Box>
    <Box>
      <BreadCrumb navigationLinks={exampleObj} color={'violet'} />
    </Box>
    <Box>
      <BreadCrumb navigationLinks={exampleObj} color={'info'} />
    </Box>
    <Box>
      <BreadCrumb navigationLinks={exampleObj} color={'olive'} />
    </Box>
  </Flex>
)
```

## Variações

### Color

```jsx
<BreadCrumb color={'primary'} />
```

Escala no tema: `theme.color`

## Styled-system props

- space https://styled-system.com/table#space
