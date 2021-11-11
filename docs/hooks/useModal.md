# `useModal` (Hook)

```js
import useModal from 'ui-components/lib/hooks/useModal'
```

## Exemplo

```js
const { isOpen, openModal, closeModal, toggleModal } = useModal(false)
```

## Parâmetros

| Parâmetro     | Tipo    | Descrição                          |
| ------------- | ------- | ---------------------------------- |
| defaultIsOpen | Boolean | Define se a modal iniciará visível |

## Resultado (object)

| Parâmetro   | Tipo     | Descrição                                                   |
| ----------- | -------- | ----------------------------------------------------------- |
| isOpen      | Boolean  | **Estado** que representa se a modal está visível           |
| openModal   | Function | Torna a modal visível (alterando `isOpen` para `true`)      |
| closeModal  | Function | Torna a modal invisível (alterando `isOpen` para `false`)   |
| toggleModal | Function | Mostra ou esconde a modal (inverte o valor de `isOpen`)     |
| params      | Any      | Parâmetros que serão usados para o contexto da modal aberta |

## Mais Exemplos

### alterando os nomes dos resultados

```jsx
import React, { useState } from 'react'
import Modal from 'ui-components/lib/components/Modal'
import Button from 'ui-components/lib/components/Button'
import useModal from 'ui-components/lib/hooks/useModal'

export const useModalHookExample = () => {
  const { isOpen: editModalIsOpen, openModal: openEditModal, closeModal: closeEditModal, params: editModalParams } = useModal()

  return (
    <>
      <Button onClick={() => openEditModal({ id: '34509583405981' })} m={10} color={'primary'}>
        Abrir modal
      </Button>
      <Modal open={editModalIsOpen} onClose={closeEditModal} header={<h3>Hello id: {(editModalParams || {}).id}</h3>} footer={<small>Footer</small>}>
        <p style={{ maxWidth: 320 }}>
          Magna ullamco incididunt laborum laboris. Qui Lorem nisi laboris minim elit ipsum magna aute commodo quis. Et minim nostrud dolore.
        </p>
      </Modal>
    </>
  )
}
```

### Exemplo com 2 modais

```jsx
import React, { useState } from 'react'
import Modal from 'ui-components/lib/components/Modal'
import Button from 'ui-components/lib/components/Button'
import useModal from 'ui-components/lib/hooks/useModal'

export const useModalHookExample = () => {
  const { isOpen: editModalIsOpen, openModal: openEditModal, closeModal: closeEditModal, params: editModalParams } = useModal()
  const { isOpen: addModalIsOpen, openModal: openAddModal, closeModal: closeAddModal, params: addModalParams } = useModal()

  return (
    <>
      <Button onClick={() => openEditModal({ id: '34509583405981' })} m={10} color={'primary'}>
        Abrir edit modal
      </Button>
      <Button onClick={() => openAddModal({ id: null })} m={10} color={'primary'}>
        Abrir add modal
      </Button>
      {/* edit modal */}
      <Modal
        open={editModalIsOpen}
        onClose={closeEditModal}
        header={<h3>Edit modal id: {(editModalParams || {}).id}</h3>}
        footer={<small>Footer</small>}
      >
        <p style={{ maxWidth: 320 }}>
          Magna ullamco incididunt laborum laboris. Qui Lorem nisi laboris minim elit ipsum magna aute commodo quis. Et minim nostrud dolore.
        </p>
      </Modal>
      {/* add modal */}
      <Modal open={addModalIsOpen} onClose={closeAddModal} header={<h3>Add modal</h3>} footer={<small>Footer</small>}>
        <p style={{ maxWidth: 320 }}>
          Magna ullamco incididunt laborum laboris. Qui Lorem nisi laboris minim elit ipsum magna aute commodo quis. Et minim nostrud dolore.
        </p>
      </Modal>
    </>
  )
}
```
