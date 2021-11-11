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
