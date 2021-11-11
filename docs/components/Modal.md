# Modal (Component)

Componente de Modal. Utilizado em conjunto com o hook `useModal`.

[Documentação do hook useModal](/docs/hooks/useModal.md)

## Como utilizar

```js
import Modal from 'ui-components/lib/components/Modal'
```

```jsx
import React, { useEffect, useState } from 'react'
import Modal from 'ui-components/lib/components/Modal'
import useModal from 'ui-components/lib/hooks/useModal'

const ModalExample = () => {
  const { isOpen, openModal, closeModal, params: modalParams } = useModal()

  return (
    <>
      <Button onClick={() => openModal({ id })} m={10} color={'primary'}>
        Abrir modal
      </Button>
      <Modal open={isOpen} onClose={closeModal} header={<h3>Hello id: {(modalParams || {}).id}</h3>} footer={<small>Footer</small>}>
        <h1>lorem ipsum modal 3</h1>
        <p>Lorem ipsum dolor sit amet</p>
      </Modal>
    </>
  )
}
export default ModalExample
```

## props

### `boxProps`

Utilizado para passar propriedades para o componente Box da modal.

**ex:**

```jsx
<Modal boxProps={{ px: 20, py: 10 }}>
  <p> Velit non duis ut elit mollit elit eu consequat velit.</p>
</Modal>
```

### `contentModalProps`

Utilizado para passar propriedades para o componente que envolve o box da modal.

**ex:**

```jsx
<Modal contentModalProps={{ width: 1024 }}>
  <p> Velit non duis ut elit mollit elit eu consequat velit.</p>
</Modal>
```

### `header`

Slot para componente ou texto. Utilizado para renderizar um cabeçalho.

**ex:**

```jsx
<Modal header={<h1>Título</h1>}>
  <p> Velit non duis ut elit mollit elit eu consequat velit.</p>
</Modal>
```

### `footer`

Slot para componente ou texto. Utilizado para renderizar um rodapé.

**ex:**

```jsx
<Modal footer={<footer>rodapé</footer>}>
  <p> Velit non duis ut elit mollit elit eu consequat velit.</p>
</Modal>
```
