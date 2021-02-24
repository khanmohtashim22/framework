import React, { useState, useContext } from 'react'

import Button from '../../../../components/button/Button'
import Dialog from '../../../../components/modal/dialog/Dialog'
import ModalContext from '../../../../components/modal/support/context/ModalContext'

import PanelContainer from '../../panel-container/PanelContainer'

const Header = () => <div>Dialog Box header</div>

const Content = () => (
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    culpa qui officia deserunt mollit anim id est laborum.
  </div>
)

const Footer = () => {
  const { close } = useContext(ModalContext)
  return (
    <Button onClick={close}>
      Continue
    </Button>
  )
}

const DialogPanel = () => {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <PanelContainer title="Dialog">
      <Button onClick={() => setDialogOpen(true)}>Open Modal</Button>
      <Dialog 
        isOpen={dialogOpen} 
        close={() => setDialogOpen(false)} 
        header={Header}
        content={Content}
        footer={Footer}
      />
    </PanelContainer>
  )
}

export default DialogPanel