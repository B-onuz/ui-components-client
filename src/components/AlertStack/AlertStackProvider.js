import React, { useState, useEffect } from 'react'
import AlertStackContext from './AlertStackContext'
import { v4 as uuidv4 } from 'uuid'

const AlertStackProvider = ({ children }) => {
  const [topRightMessages, setTopRightMessages] = useState([])
  const [topLeftMessages, setTopLeftMessages] = useState([])
  const [bottomRightMessages, setBottomRightMessages] = useState([])
  const [bottomLeftMessages, setBottomLeftMessages] = useState([])

  const _hideMessage = (setMessages, _id) => {
    setMessages((messages) => messages.filter((message) => message._id !== _id))
  }

  const _showMessage = (fn, params) => {
    fn((messages) => {
      return [...messages, params]
    })

    if (params.time) {
      setTimeout(() => {
        _hideMessage(fn, params._id)
      }, params.time || params.time)
    }
  }

  const showMessage = ({ position = 'bottom-left', title, message, color, time }) => {
    const messageParam = { _id: uuidv4(), title, message, color, time }
    switch (position) {
      case 'top-right':
        return _showMessage(setTopRightMessages, messageParam)
      case 'top-left':
        return _showMessage(setTopLeftMessages, messageParam)
      case 'bottom-right':
        return _showMessage(setBottomRightMessages, messageParam)
      case 'bottom-left':
        return _showMessage(setBottomLeftMessages, messageParam)
      default:
        return _showMessage(setBottomLeftMessages, messageParam)
    }
  }

  return (
    <AlertStackContext.Provider value={{ showMessage, topRightMessages, topLeftMessages, bottomRightMessages, bottomLeftMessages }}>
      {children}
    </AlertStackContext.Provider>
  )
}

export default AlertStackProvider
