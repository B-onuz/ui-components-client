# Textarea (Component)

Componente de input para texto com multiplas linhas.

## Como utilizar

```js
import Textarea from 'ui-components/lib/components/Textarea'
```

```jsx
<Textarea />
```

## Textarea controlada

```jsx
import React, { useState } from 'react'

const FooBar = () => {
  const [firstname, setFirstName] = useState('')
  return <Textarea id={'firstname'} name={'firstname'} placeholder={placeholder} value={firstname} onChange={(e) => setFirstName(e.target.value)} />
}

export default FooBar
```
