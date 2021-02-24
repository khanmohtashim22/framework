import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import Overlay from './support/overlay/Overlay'
import ModalContext from './support/context/ModalContext'

const Modal = ({ isOpen, children, close }) => {
  const modalRoot = document.getElementById('modal-root')
  const modaContainer = document.createElement('div')

  const context = {
    close
  }

  useEffect(() => {
    modalRoot.appendChild(modaContainer)
    return () => modalRoot.removeChild(modaContainer)
  })

  return ReactDOM.createPortal(
    isOpen ? (
      <ModalContext.Provider value={context}>
        <Overlay>
          <div>{children}</div>
        </Overlay>
      </ModalContext.Provider>
    ) : null,
    modaContainer
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
}

export default Modal