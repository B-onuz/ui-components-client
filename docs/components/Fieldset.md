# Fieldset (Component)

Componente de formulário.

## Como utilizar

```js
import Fieldset from 'ui-components/lib/components/Fieldset'
```

```jsx
import Fieldset from 'ui-components/lib/components/Fieldset'
import TextField from 'ui-components/lib/components/TextField'

const MyForm = () => {
  return (
    <Fieldset mt={4} legend={'Informações pessoais'}>
      <TextField id="name" name={'name'} required label={'Nome'} m={2} placeholder={'Nome'} />
    </Fieldset>
  )
}
```

## Styled-system props

- space https://styled-system.com/table#space
- layout https://styled-system.com/table#layout
