# TabSelector (Component)

Componente de seletor de abas.

## Como utilizar

```js
import TabSelector from 'ui-components/lib/components/TabSelector'
```

```jsx
import React, { useState } from 'react'
import TabSelector from './TabSelector'
import Fieldset from '../Fieldset'
import TextField from '../TextField'
import { Box, Flex } from 'reflexbox'

export default {
  title: 'TabSelector',
  component: TabSelector,
}

export const TabSelectorExample = () => {
  const [contentA, setContentA] = useState(true)
  const [contentB, setContentB] = useState(false)

  const handleTab = () => {
    setContentA(!contentA)
    setContentB(!contentB)
  }

  return (
    <Flex flexDirection={'column'} alignItems={'center'}>
      <TabSelector
        color={'primary'}
        optionA={'Pessoa física'}
        optionB={'Pessoa jurídica'}
        activeA={contentA}
        activeB={contentB}
        handleClick={handleTab}
      />
      {contentA && (
        <Fieldset m={4} legend={'Informações pessoais'}>
          <Flex flexWrap={'wrap'} m={-2}>
            <Box width={[1, 1 / 2, 1 / 3]} m={2}>
              <TextField id="name" name={'name'} required label={'Nome'} placeholder={'Nome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]} m={2}>
              <TextField id="lastname" name={'lastname'} label={'Sobrenome'} placeholder={'Sobrenome'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]} m={2}>
              <TextField id="fullname" name={'fullname'} label={'Exibir Como:'} placeholder={'Nome + Sobrenome'} />
            </Box>
          </Flex>
        </Fieldset>
      )}
      {contentB && (
        <Fieldset m={4} bordered p={'1em'} legend={'Dados de contato (bordered)'}>
          <Flex flexWrap={'wrap'} m={-2}>
            <Box width={[1, 1 / 2, 1 / 3]} m={2}>
              <TextField id="email" type="email" name={'email'} label={'Email'} placeholder={'Email'} />
            </Box>
            <Box width={[1, 1 / 2, 1 / 3]} m={2}>
              <TextField id="telefone" type="phone" name={'fullname'} label={'Telefone'} placeholder={'Telefone'} />
            </Box>
          </Flex>
        </Fieldset>
      )}
    </Flex>
  )
}
```

## Styled-system props

- space https://styled-system.com/table#space
