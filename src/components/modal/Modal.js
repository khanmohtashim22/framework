import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import Overlay from './support/overlay/Overlay'

const Modal = ({ isOpen, children }) => {
  const modalRoot = document.getElementById('modal-root')
  const modaContainer = document.createElement('div')

  useEffect(() => {
    modalRoot.appendChild(modaContainer)
    return () => modalRoot.removeChild(modaContainer)
  })

  return ReactDOM.createPortal(
    isOpen ? (
      <Overlay>
        <div>{children}</div>
      </Overlay>
    ) : null,
    modaContainer
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
}

export default Modal