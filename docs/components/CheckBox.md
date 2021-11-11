# CheckBox (Component)

Componente de formulário usado para valores booleanos.

## Como utilizar

```js
import CheckBox from 'ui-components/lib/components/CheckBox'
```

```jsx
<CheckBox id="tributario" label="Aceite os termos e condições" />
```

## Variações

### Checkbox não controlado

```jsx
import React from 'react'
import CheckBox from 'ui-components/lib/components/CheckBox'

const UncontrolledCheckbox = () => {
  return <CheckBox id="tributario" label={'Aceite os termos e condições'} />
}
```

### Checkbox controlado

```jsx
import React, { useState } from 'react'
import CheckBox from 'ui-components/lib/components/CheckBox'

const ControlledCheckbox = () => {
  const [acceptConditions, setAcceptConditions] = useState(false)

  const handleChangeAcceptConditions = (event) => {
    const target = event.target
    setAcceptConditions(target.checked)
  }

  return <CheckBox id="tributario" checked={acceptConditions} onChange={handleChangeAcceptConditions} label={'Aceite os termos e condições'} />
}
```
