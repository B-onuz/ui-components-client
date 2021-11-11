# Pagination (Component)

Componente para paginação.

## Como utilizar

```js
import Pagination from 'ui-components/lib/components/Pagination'
```

```jsx
import React, { useState } from 'react'
import Pagination from 'ui-components/lib/components/Pagination'

export default {
  title: 'Pagination',
  component: Pagination,
}

export const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const total = 18

  const handleChangeNext = () => {
    const nextPage = currentPage + 1
    if (nextPage <= total) {
      setCurrentPage(nextPage)
    }
  }

  const handleChangePrev = () => {
    const prevPage = currentPage - 1
    if (prevPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <Pagination
      color={'primary'}
      m={20}
      onChangePage={(item) => setCurrentPage(item)}
      onPrevPage={(item) => handleChangePrev()}
      onNextPage={(item) => handleChangeNext()}
      total={total}
      page={currentPage}
      onLazyChangePage={(page) => console.log(page)}
    />
  )
}
```

## Variações

### Variant

```jsx
<Pagination color={'primary'} />
```

Escala no tema: `theme.colors`

## Styled-system props

- space https://styled-system.com/table#space
- layout https://styled-system.com/table#layout
