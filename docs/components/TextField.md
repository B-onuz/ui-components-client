# TextField (Component)

[Descrição do componente e onde usar]

## Como utilizar

```js
import TextField from 'ui-components/lib/components/TextField'
```

```jsx
import React, { useState } from 'react'

const FooBar = () => {
  const [firstname, setFirstName] = useState('')
  return (
    <TextField
      id="name"
      name={'name'}
      required
      label={'Nome'}
      placeholder={'Nome'}
      value={firstname}
      onChange={(e) => setFirstName(e.target.value)}
    />
  )
}

export default FooBar
```

## Variações

### Multiline

```jsx
import React, { useState } from 'react'

const FooBar = () => {
  const [firstname, setFirstName] = useState('')
  return (
    <TextField
      id="name"
      name={'name'}
      required
      multiline // para funcionar como textarea, basta adicionar esta prop
      label={'Nome'}
      placeholder={'Nome'}
      value={firstname}
      onChange={(e) => setFirstName(e.target.value)}
    />
  )
}

export default FooBar
```

## Styled-system props

- space https://styled-system.com/table#space
- layout https://styled-system.com/table#layout
