# ContentToggle (Component)

Componente que alterna estado de um conteúdo entre visível e oculto

## Como utilizar

```js
import ContentToggle from 'ui-components/lib/components/ContentToggle'
```

```jsx
import React from 'react'
import ContentToggle from './ContentToggle'

export default {
  title: 'ContentToggle',
  component: ContentToggle,
}

export const ContentToggleExample = () => (
  <>
    <ContentToggle contentTitle="Conteúdo 1" startVisible>
      <div style={{ padding: 15 }}>
        <div>Exemplo</div>
        <div>Texto do conteúdo 1</div>
      </div>
    </ContentToggle>
    <ContentToggle contentTitle="Conteúdo 2">Exemplo de conteúdo 2</ContentToggle>
  </>
)
```

## Variações

### Variant

Alterna estado inicial que determina se o conteúdo se inicia visível ou oculto

```jsx
<ContentToggle startVisible />
```

Escala no tema: `theme.variantScale`

## Styled-system props

- space https://styled-system.com/table#space
