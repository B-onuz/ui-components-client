# Card (Component)

Componente de cartão customizável para dados

## Como utilizar

```js
import Card from 'ui-components/lib/components/Card'
```

```jsx
<Card title={'Demandas Pendentes'} count={99} color={'yellow'} icon={faArchive} />
<Card title={'Demandas Em Aberto'} count={99} color={'teal'} icon={faArchive} />
<Card title={'Demandas Concluídas'} count={99} color={'blue'} icon={faArchive} />
<Card title={'Demandas Canceladas'} count={99} color={'red'} icon={faArchive} />
```

## Variações

### Variant

```jsx
<Card variant={'variant'} />
```

Escala no tema: `theme.variantScale`

## Styled-system props

- space https://styled-system.com/table#space
- layout https://styled-system.com/table#layout
