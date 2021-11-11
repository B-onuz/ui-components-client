# B-onuz ui-components :nail_care:

Biblioteca de Componentes de User Interface para projetos da **B-onuz**.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![Node.js CI](https://github.com/B-onuz/ui-components/workflows/Node.js%20CI/badge.svg)

## Stack

- nwb (https://github.com/insin/nwb)
- Styled System (https://styled-system.com/)
- PlopJS (https://plopjs.com/)
- jest (https://jestjs.io/)
- Storybook (https://storybook.js.org/)

## Documentação

- [Documentação dos componentes](docs/components)
- [Documentação dos hooks](docs/hooks)

## Instalação

Manual de instalação [instalação](docs/guides/installation.md)

## Desenvolvimento

**Instalar dependências do projeto**

```
  yarn install
```

**Rodar testes unitários**

```
yarn test
```

**Rodar testes com coverage**

```
yarn test:coverage
```

**Rodar testes e ouvir alterações nos arquivos**

```
yarn test:watch
```

**Storybook** (para abrir uma pagina com exemplos dos componentes)

```
yarn storybook
```

Será aberto uma página com exemplos dos componentes `http://localhost:6006`.

## Build :package: :fire:

Apagar arquivos gerados para produção `build`

```
yarn clean
```

Gerar arquivos para produção `build`

```
yarn build
```

### Publicação da versão :package: :rocket:

Primeiro, limpe a build anterior e gere a build atualizada.

`yarn clean && yarn build`

Commit as alterações **exemplo:** `chore(build): add new components and some fixes`.

`git cz`

Gere uma nova **release**

`yarn release`

Por último, suba as alterações juntamente com a **tag da versão**

`git push --follow-tags origin master`

### Criação de componentes

Para criar um novo componente, utilize o `plop component`.

Após rodar o comando abaixo, digite o nome do componente e qual será a tag base dele.

```
plop component
```

Você pode rodar o comando já passando o nome do componente e da tag base.

```
plop component box div
```

#### Documentação de componentes

Para criar doc de um componente separadamente, podemos usar o comando `plop component:doc`.

exemplo:

```
plop component:doc
```

ou

```
plop component:doc Button
```
