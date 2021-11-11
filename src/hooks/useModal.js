import React, { useState, useCallback } from 'react'
/*
 * Example
 * const { isOpen, openModal, closeModal, toggleModal } = useModal(false)
 */
const useModal = (defaultIsOpen = false) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen)
  const [params, setParams] = useState(null)

  const openModal = useCallback((params) => {
    setParams(params)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setParams(null)
  }, [])

  const toggleModal = useCallback(() => {
    if (!isOpen === false) {
      setParams(null)
    }
    setIsOpen(!isOpen)
  }, [isOpen])

  return { isOpen, openModal, closeModal, toggleModal, params }
}

export default useModal
