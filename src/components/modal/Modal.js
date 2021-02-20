import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

const Modal = () => {
  const modalRoot = document.getElementById('modal-root')
  const modaContainer = document.createElement('div')

  useEffect(() => {
    modalRoot.appendChild(modaContainer)
    return () => modalRoot.removeChild(modaContainer)
  })

  return ReactDOM.createPortal(
    <h1 id="mohtashim">Test</h1>,
    modaContainer
  )
}

export default Modal