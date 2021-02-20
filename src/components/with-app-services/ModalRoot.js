import React from 'react'

const addModalRoot = () => {
  const modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'modal-root')
  document.body.appendChild(modalRoot)
}

class ModalRoot extends React.Component {
  constructor(props) {
    super(props)
    addModalRoot()
  }
  
  render() {
    return null
  }
}

export default ModalRoot