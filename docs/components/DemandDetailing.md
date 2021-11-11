# DemandDetailing (Component)

Componente de detalhamento de demana

## Como utilizar

```js
import DemandDetailing from 'ui-components/lib/components/DemandDetailing'
```

```jsx
import React from 'react'
import DemandDetailing from './DemandDetailing'
import { Box, Flex } from 'reflexbox'
import Button from '../Button'
import Typography from '../Typography'

export default {
  title: 'DemandDetailing',
  component: DemandDetailing,
}

const data = [
  {
    name: 'Advogado Bonuz',
    date: '22/08/2020 08:45',
    text:
      'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
  },
  {
    name: 'Cliente',
    date: '22/08/2020 08:45',
    text:
      'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
  },
  {
    name: 'Advogado Bonuz',
    date: '22/08/2020 08:45',
    text:
      'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
    attachments: [
      {
        url: 'https://lorempixel.com/50/50',
        label: 'contrato_nda_v1.pdf',
      },
      {
        url: 'https://lorempixel.com/50/50',
        label: 'contrato_nda_v2.pdf',
      },
    ],
  },
]

export const DemandDetailingExample = () => <DemandDetailing reportTitle="Conclusão" reportKind="Histórico" detailingData={data} />
```
