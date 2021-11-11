import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Box from '../Box'
import { animated, useTransition } from 'react-spring'
import { space, layout, compose } from 'styled-system'

const ContentModal = styled(animated.div)`
  width: auto;
  max-width: 90%;
  margin: auto;
  ${compose(space, layout)}
`

const BoxModal = styled(Box)`
  box-sizing: border-box;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  padding: ${({ spacing }) => (spacing ? spacing : '20px')};
`

const BoxModalContent = styled.div`
  overflow: auto;
`

const BoxModalHeader = styled.div``
const BoxModalFooter = styled.div``

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Shadow = styled.button`
  position: absolute;
  z-index: -1;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
  border: none;
  outline: none;
`

const useRootModal = () => {
  const [$rootModal, setRootModal] = useState()

  useEffect(() => {
    const rootModal = document.getElementById('modal-root')
    if (rootModal) {
      setRootModal(rootModal)
    } else {
      const rootEl = document.createElement('div')
      rootEl.id = 'modal-root'
      setRootModal(rootEl)
      document.body.appendChild(rootEl)
    }
  })

  return { $rootModal }
}

const Modal = ({ children, open, onClose, boxProps, header, footer, contentModalProps, spacing, ...rest }) => {
  const { $rootModal } = useRootModal()
  const transitions = useTransition(open, null, {
    from: { transform: 'translate3d(0,-80px,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,0px,0)', opacity: 1 },
    leave: { transform: 'translate3d(0,-80px,0)', opacity: 0 },
  })

  const opacityTransitions = useTransition(open, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  if (!$rootModal) return null

  return ReactDOM.createPortal(
    opacityTransitions.map(
      ({ item, key }) =>
        item && (
          <Wrapper {...rest} key={key} role="dialog" aria-modal="true">
            {transitions.map(
              ({ item, key, props }) =>
                item && (
                  <ContentModal key={key} style={props} {...contentModalProps}>
                    <BoxModal {...boxProps} spacing={spacing}>
                      <BoxModalHeader>{header}</BoxModalHeader>
                      <BoxModalContent>{children}</BoxModalContent>
                      <BoxModalFooter>{footer}</BoxModalFooter>
                    </BoxModal>
                  </ContentModal>
                )
            )}

            {opacityTransitions.map(({ item, key, props }) => item && <Shadow key={key} style={props} onClick={onClose} />)}
          </Wrapper>
        )
    ),
    $rootModal
  )
}

export default Modal
