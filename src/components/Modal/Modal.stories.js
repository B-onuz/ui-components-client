import React, { useState } from 'react'
import Modal from './Modal'
import Button from '../Button'
import useModal from '../../hooks/useModal'

export default {
  title: 'Modal',
  component: Modal,
}

export const MultipleModals = () => {
  const [modalOpen, setModalOpen] = useState([false, false, false])

  const openModal = (key) => {
    setModalOpen(
      modalOpen.map((value, index) => {
        if (index === key) return true
        return value
      })
    )
  }

  const closeModal = (key) => {
    setModalOpen(
      modalOpen.map((value, index) => {
        if (index === key) return false
        return value
      })
    )
  }

  return (
    <>
      <Button onClick={() => openModal(0)} m={10} color={'primary'}>
        Abrir modal 1
      </Button>
      <Button onClick={() => openModal(1)} m={10} color={'primary'}>
        Abrir modal 2
      </Button>
      <Button onClick={() => openModal(2)} m={10} color={'primary'}>
        Abrir modal 3
      </Button>
      <Modal open={modalOpen[0]} onClose={() => closeModal(0)}>
        <h1>lorem ipsum modal 1</h1>
        <Button onClick={() => openModal(1)} m={10} color={'primary'}>
          Abrir modal 2
        </Button>
        <Button onClick={() => openModal(2)} m={10} color={'primary'}>
          Abrir modal 3
        </Button>
      </Modal>
      <Modal open={modalOpen[1]} onClose={() => closeModal(1)}>
        <h1>lorem ipsum modal 2</h1>
        <Button onClick={() => openModal(0)} m={10} color={'primary'}>
          Abrir modal 1
        </Button>
        <Button onClick={() => openModal(2)} m={10} color={'primary'}>
          Abrir modal 3
        </Button>
      </Modal>
      <Modal open={modalOpen[2]} spacing="40px 60px" onClose={() => closeModal(2)}>
        <h1>lorem ipsum modal 3</h1>
        <Button onClick={() => openModal(0)} m={10} color={'primary'}>
          Abrir modal 1
        </Button>
        <Button onClick={() => openModal(1)} m={10} color={'primary'}>
          Abrir modal 2
        </Button>
      </Modal>
    </>
  )
}

export const useModalHook = () => {
  const { isOpen, openModal, closeModal, params: modalParams } = useModal()

  return (
    <>
      <Button onClick={() => openModal({ id: '#1' })} m={10} color={'primary'}>
        Abrir modal
      </Button>
      <Modal
        contentModalProps={{ width: 1024 }}
        boxProps={{ p: 40 }}
        open={isOpen}
        onClose={closeModal}
        header={<h3>Hello id: {(modalParams || {}).id}</h3>}
        footer={<small>Footer</small>}
      >
        <p style={{ maxWidth: 320 }}>
          Magna ullamco incididunt laborum laboris. Qui Lorem nisi laboris minim elit ipsum magna aute commodo quis. Et minim nostrud dolore
          reprehenderit aliqua non ad quis et. Commodo excepteur proident Lorem laboris non qui pariatur duis id amet. Mollit minim commodo magna
          mollit dolor irure dolor sint Lorem nostrud reprehenderit ea. Elit laborum in eiusmod consectetur consequat dolore. Sit nostrud deserunt
          officia laborum Lorem sint officia. Adipisicing veniam aliquip ex reprehenderit tempor velit tempor amet deserunt. Ad veniam minim
          exercitation officia. Excepteur laborum tempor qui non elit id quis esse enim. Anim do sint fugiat cupidatat dolor officia incididunt
          incididunt laboris deserunt irure. Velit in dolor est ex aute tempor sunt laborum cupidatat velit amet. Deserunt sunt eu voluptate nisi
          dolore aliquip cillum ea magna culpa cillum Lorem. Esse occaecat mollit consectetur non velit laborum qui anim occaecat fugiat amet
          adipisicing. Et ut voluptate duis consectetur dolor eu cupidatat. Voluptate in ipsum do est dolore magna est velit magna in irure. Excepteur
          proident sit ut Lorem et aute ut. Adipisicing id cillum elit reprehenderit nisi deserunt consequat. Elit duis ad commodo incididunt est.
          Voluptate sint Lorem minim voluptate in.
        </p>
      </Modal>
    </>
  )
}
