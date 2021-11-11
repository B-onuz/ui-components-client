import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'
import ReactDOM from 'react-dom'
import Alert from '../Alert'
import AlertStackContext from './AlertStackContext'

const Wrapper = styled.div`
  position: fixed;
  z-index: 9999999;
  max-width: 100%;
  margin: 10px;
  ${({ top, right, bottom, left }) => {
    if (top && right) {
      return `top: ${0}px; right: ${0}px;`
    }
    if (left && top) {
      return `left: ${0}px; top: ${0}px;`
    }
    if (bottom && left) {
      return `bottom: ${0}px; left: ${0}px;`
    }
    if (bottom && right) {
      return `bottom: ${0}px; right: ${0}px;`
    }
    return `bottom: ${0}px; left: ${0}px;`
  }}
`

const useRootAlertStack = () => {
  const [$rootAlertStack, setRootAlertStack] = useState()

  useEffect(() => {
    const rootAlertStack = document.getElementById('root-alert-stack')
    if (rootAlertStack) {
      setRootAlertStack(rootAlertStack)
    } else {
      const rootEl = document.createElement('div')
      rootEl.id = 'root-alert-stack'
      setRootAlertStack(rootEl)
      document.body.appendChild(rootEl)
    }
  })

  return { $rootAlertStack }
}

const AlertStack = ({ ...rest }) => {
  const { $rootAlertStack } = useRootAlertStack()
  const { topRightMessages, topLeftMessages, bottomLeftMessages, bottomRightMessages } = useContext(AlertStackContext)

  if (!$rootAlertStack) return null
  return ReactDOM.createPortal(
    <>
      {!!topRightMessages.length && (
        <Wrapper top right>
          {topRightMessages.map(({ title, message, color }) => (
            <Alert mt={10} animate={'top'} color={color} title={title} message={message} />
          ))}
        </Wrapper>
      )}
      {!!topLeftMessages.length && (
        <Wrapper top left>
          {topLeftMessages.map(({ title, message, color }) => (
            <Alert mt={10} animate={'top'} color={color} title={title} message={message} />
          ))}
        </Wrapper>
      )}
      {!!bottomLeftMessages.length && (
        <Wrapper bottom left>
          {bottomLeftMessages.map(({ title, message, color }) => (
            <Alert mt={10} animate={'bottom'} color={color} title={title} message={message} />
          ))}
        </Wrapper>
      )}
      {!!bottomRightMessages.length && (
        <Wrapper bottom right>
          {bottomRightMessages.map(({ title, message, color }) => (
            <Alert mt={10} animate={'bottom'} color={color} title={title} message={message} />
          ))}
        </Wrapper>
      )}
    </>,
    $rootAlertStack
  )
}

export default AlertStack
