# HamburguerButton (Component)

Botão de hamburguer, é utilizado no layout base.

## Como utilizar

```js
import HamburguerButton from 'ui-components/lib/components/HamburguerButton'
```

```jsx
import React, { useState } from 'react'
import HamburguerButton from 'ui-components/lib/components/HamburguerButton'

const HamburguerButtonExample = () => {
  const [isOpen, setIsOpen] = useState(false)
  return <HamburguerButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
}
```

## Styled-system props

- space https://styled-system.com/table#space
- layout https://styled-system.com/table#layout
