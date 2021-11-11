# Switch (Component)

Componente Switch, criado com base no checkbox nativo.

## Como utilizar

```js
import Switch from 'ui-components/lib/components/Switch'
```

```jsx
import Switch from 'ui-components/lib/components/Switch'
import React, { useState } from 'react'

const SwitchExample = () => {
  const [checked, setChecked] = useState(false)
  const handleChangeSwitch = (e) => {
    setChecked(e.target.checked)
  }
  return <Switch checked={checked} onChange={handleChangeSwitch} />
}
```

## Variações

### Color

```jsx
<Switch color={'primary'} />
```

Escala no tema: `theme.colors`

## Styled-system props

- space https://styled-system.com/table#space
