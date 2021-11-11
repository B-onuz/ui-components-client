## Instalação via package.json

Adicione `ui-components` em `dependencies` dentro do arquivo `package.json`. (é obrigatório que seja o caminho ssh e não https)

```
  ...
    "dependencies": {
        ...,
        "ui-components": "git+ssh://git@github.com:B-onuz/ui-components.git"
    }
  ...
```

Lembre-se que temos como dependência `"styled-components":"^5.1.0"`. Caso não tenha instalado no seu projeto utilize o comando:

```
  yarn add styled-components
```

Configure o tema no arquivo index.js do seu projeto, exemplo:

```js
/* ... */
import { ThemeProvider } from 'styled-components'
import 'jest-styled-components' // linha adicionada
import theme from 'ui-components/lib/theme' // linha adicionada

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {' '}
      {/* linha adicionada */}
      <App />
    </ThemeProvider>{' '}
    {/* linha adicionada */}
  </React.StrictMode>,
  document.getElementById('root')
)

/* ... */
```

**Tipografia**

Importe no `index.js` do seu projeto a fonte `typeface-lato`. https://www.npmjs.com/package/typeface-lato

```
  yarn add typeface-lato
```

```js
import 'typeface-lato'
```

## Icones

Estamos usando a biblioteca de icones [react-fontawesome](https://github.com/FortAwesome/react-fontawesome).

**Instalação do fontawesome**

`yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome`

Estamos usando a biblioteca de icones [react-fontawesome](https://github.com/FortAwesome/react-fontawesome)

Crie uma biblioteca de icones para facilitar a importação - [Build a Library to Reference Icons Throughout Your App More Conveniently](https://github.com/FortAwesome/react-fontawesome/blob/master/README.md#build-a-library-to-reference-icons-throughout-your-app-more-conveniently)

## Grid

Estamos usando uma biblioteca para grid chamada `reflexbox`. [reflexbox DOCS](https://rebassjs.org/reflexbox/).

**Instalação**

`yarn add reflexbox`

## Como importar componentes

Os componentes estão dentro de `ui-components/lib/components`, podem ser importados de algumas formas diferentes.

```js
import { Button } from 'ui-components/lib'
```

```js
import Button from 'ui-components/lib/components/Button'
```
