import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { color, space } from 'styled-system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button'
import ContextMenuDialog from './ContextMenuDialog'
import Modal from '../Modal'
import useModal from '../../hooks/useModal'
import shortid from 'shortid'

const StyledContextMenu = styled.div`
  ${color}
  ${space}
  position: relative;
  display: flex;
  .contextButton {
    width: 2em;
    height: 2em;
  }
`

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
`

const ContextMenuToogleButton = styled.button`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-color: #f5f5f5;
  box-shadow: 0px 2px 3px #2c282848;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`

const Divider = styled.hr`
  width: 100%;
  margin: 8px 0;
  border: 1px solid #f1f1f3;
`

const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme, buttonIcon }) => (!buttonIcon ? theme.colors.darkGrey : '')};
`

const ContextMenu = ({ children, direction, contextMenuActions, contextFunctions, buttonIcon, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)
  const buttonRef = useRef(null)

  const {
    isOpen: isOpenResponsiveModal,
    openModal: openResponsiveModal,
    closeModal: closeResponsiveModal,
    params: responsiveModalParams,
  } = useModal()

  const onClose = () => {
    setIsOpen(false)
    closeResponsiveModal()
    return true
  }

  useEffect(() => {
    if (isOpen) {
      openResponsiveModal()
    }
  })

  const needResponsive = screen.width >= 500 ? false : true

  return (
    <StyledContextMenu ref={wrapperRef} key={`${shortid.generate()}`} {...rest}>
      {contextFunctions ? (
        <div ref={buttonRef}>
          <Button p={0} className="contextButton" onClick={() => setIsOpen((last) => !last)} color={'primary'}>
            <Icon buttonIcon icon={buttonIcon} />
          </Button>
        </div>
      ) : (
        <ContextMenuToogleButton ref={buttonRef} onClick={() => setIsOpen((last) => !last)}>
          <Icon icon={faEllipsisH} />
        </ContextMenuToogleButton>
      )}
      {needResponsive ? (
        <>
          <Modal open={isOpenResponsiveModal} onClose={onClose}>
            <ModalWrapper>
              {(contextMenuActions || []).map((action, index) => (
                <React.Fragment key={`${action.text}-${shortid.generate()}`}>
                  <Button
                    key={`${action.text}-${shortid.generate()}`}
                    linkButton
                    color={'primary'}
                    onClick={() => onClose() && action.buttonFunction()}
                  >
                    {action.text}
                  </Button>
                  {index + 1 !== contextMenuActions.length ? <Divider /> : null}
                </React.Fragment>
              ))}
            </ModalWrapper>
          </Modal>
        </>
      ) : (
        <ContextMenuDialog contextFunctions={contextFunctions} isOpen={isOpen} onClose={onClose} buttonRef={buttonRef} direction={direction}>
          {(contextMenuActions || []).map((action, index) => (
            <React.Fragment key={`${action.text}-${shortid.generate()}`}>
              <Button key={`${action.text}-${shortid.generate()}`} linkButton color={'primary'} onClick={() => onClose() && action.buttonFunction()}>
                {action.text}
              </Button>
              {index + 1 !== contextMenuActions.length ? <Divider /> : null}
            </React.Fragment>
          ))}
        </ContextMenuDialog>
      )}
    </StyledContextMenu>
  )
}

ContextMenu.defaultProps = {
  direction: 'left',
}

export default ContextMenu
