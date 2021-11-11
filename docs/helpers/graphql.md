# Graphql Helpers

## deleteItemsFromCache

```jsx
/* Exemplo de uso */
import React from 'react'
import graphqlHelpers from 'ui-components/lib/helpers/graphql'
import Button from 'ui-components/lib/components/Button'
import listMutations from '../mutations' // mutation de exemplo
import listQueries from '../queries' // queries de exemplo

const AddButton = () => {
  const [addItem] = useMutation(listMutations.ADD_ITEM, {
    update: graphqlHelpers.deleteItemsFromCache('ListItem'), // Adicione o type que você deseja remover do cache
    refetchQueries: [{ query: listQueries.LIST_ITEMS }], // query com as listagens
  })
}

export default AddButton
```
