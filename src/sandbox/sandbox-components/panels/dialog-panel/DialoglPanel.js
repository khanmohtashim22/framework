import React, { useState } from 'react'

import Button from '../../../../components/button/Button'
import Dialog from '../../../../components/modal/dialog/Dialog'

import PanelContainer from '../../panel-container/PanelContainer'

const DialogPanel = () => {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <PanelContainer title="Dialog">
      <Button onClick={() => setDialogOpen(true)}>Open Modal</Button>
      <Dialog 
        isOpen={dialogOpen} 
        close={() => setDialogOpen(false)} 
        header={<div>Header</div>}
        content={<div>Content</div>}
        footer={<div>Footer</div>}
      />
    </PanelContainer>
  )
}

export default DialogPanel