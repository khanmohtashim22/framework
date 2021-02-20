import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

const Modal = () => {
  const modalRoot = document.getElementById('modal-root')
  const container = document.createElement('div')

  useEffect(() => {
    modalRoot.appendChild(container)
    return () => modalRoot.removeChild(container)
  })

  return ReactDOM.createPortal(
    <h1 id="mohtashim">Test</h1>,
    container
  )
}

export default Modal