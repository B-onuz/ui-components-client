# Table (Component)

Componente de tabela para listagem de dados, com suporte a paginação.

## Como utilizar

```js
import Table from 'ui-components/lib/components/Table'
```

```jsx
import React, { useState } from 'react'
import Table from 'ui-components/lib/components/Table'
import styled from 'styled-components'

export default {
  title: 'Table',
  component: Table,
}

export const TableExample = () => {
  const [sort, setSort] = useState('nome')
  const [order, setOrder] = useState('asc')

  const handleChangeOrder = (item) => {
    if (item.key === sort) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    } else {
      setSort(item.key)
      setOrder('asc')
    }
  }

  return (
    <Table
      width={[2 / 3]}
      onChangeOrder={handleChangeOrder}
      pagination={{
        sort,
        order,
      }}
      headers={[
        {
          title: 'Advogados',
          key: 'nome',
          sort: true,
          align: 'left',
        },
        {
          title: 'Especialidades',
          key: 'especialidades',
          sort: true,
          align: 'left',
        },
        {
          title: 'Tarefas',
          key: 'tarefas',
          sort: true,
          align: 'center',
          cellComponent({ row, headers, value }) {
            // exemplo de componente de celula personalizado
            return (
              <span style={{ color: 'red', textDecoration: 'underline' }}>
                {value} - {row._id}
              </span>
            )
          },
        },
        {
          title: 'Ações',
          key: 'actions',
          align: 'center',
          width: '50px',
        },
      ]}
      data={[
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
      ]}
    />
  )
}
```

## Styled-system props

- space https://styled-system.com/table#space
- layout https://styled-system.com/table#layout
