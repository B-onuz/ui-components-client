# AlertStack (Component)

Controle de mensagens de erro, sucesso, avisos etc.

## Configuração

```jsx
/* ... */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import 'jest-styled-components'
import theme from 'ui-components/lib/theme'
import AlertStackProvider from 'ui-components/lib/components/AlertStack/AlertStackProvider'
import AlertStack from 'ui-components/lib/components/AlertStack'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AlertStackProvider>
        <App />
        <AlertStack />
      </AlertStackProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

/* ... */
```

```jsx
import React from 'react'
import useAlertStack from 'ui-components/lib/hooks/useAlertStack'

// este componente deve estar dentro da hierarquia de componentes.

const Screen = () => {
  const { showMessage } = useAlertStack()
  return (
    <Button
      onClick={() =>
        showMessage({
          title: 'Cadastro realizado com sucesso', //  Título da mensagem
          message: 'Mensagem mais detalhada aqui', // Mensagem detalhada
          color: 'success', // color, veja theme.color
          position: 'bottom-right', // posição sempre nessa ordem top ou bottom seguido de right ou left
          time: 3000, // tempo em ms que a mensagem permanecerá exibida.
        })
      }
    >
      Mostrar Mensagem
    </Button>
  )
}
```
