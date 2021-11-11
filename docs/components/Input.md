# Input (Component)

Componente para entrada de texto.

## Como utilizar

```js
import Input from 'ui-components/lib/components/Input'
```

```jsx
<Input />
```

## Input controlada

```jsx
import React, { useState } from 'react'

const FooBar = () => {
  const [firstname, setFirstName] = useState('')
  return <Input id={'firstname'} name={'firstname'} placeholder={placeholder} value={firstname} onChange={(e) => setFirstName(e.target.value)} />
}

export default FooBar
```
