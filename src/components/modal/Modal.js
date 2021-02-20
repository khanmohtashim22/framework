import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ isOpen, children }) => {
  const modalRoot = document.getElementById('modal-root')
  const modaContainer = document.createElement('div')

  useEffect(() => {
    modalRoot.appendChild(modaContainer)
    return () => modalRoot.removeChild(modaContainer)
  })

  return ReactDOM.createPortal(
    isOpen ? <div>{children}</div> : null,
    modaContainer
  )
}

export default Modal