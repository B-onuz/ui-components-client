# Tooltip (Component)

Componente Tooltip

## Como utilizar

```js
import Tooltip from 'ui-components/lib/components/Tooltip'
```

```jsx
import React from 'react'
import Tooltip from './Tooltip'
import { Flex, Box } from 'reflexbox/styled-components'

export default {
  title: 'Tooltip',
  component: Tooltip,
}

const tooltipShortText = 'Exemplo de Texto curto'

export const TooltipExample = () => (
  <Tooltip m={3} text={tooltipShortText}>
    Example
  </Tooltip>
)
```

## Variações

### Color

```jsx
<Tooltip color={color} />
```

### Direction

```jsx
<Tooltip direction={direction} />
```

Escala no tema: `theme.variantScale`

## Styled-system props

- space https://styled-system.com/table#space
