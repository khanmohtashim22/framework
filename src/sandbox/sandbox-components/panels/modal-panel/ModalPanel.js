import React, { useState } from 'react'

import Button from '../../../../components/button/Button'
import Modal from '../../../../components/modal/Modal'

import PanelContainer from '../../panel-container/PanelContainer'

const ModalPanel = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <PanelContainer title="Modal">
      <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
      <Modal isOpen={modalOpen} close={() => setModalOpen(false)} />
    </PanelContainer>
  )
}

export default ModalPanel