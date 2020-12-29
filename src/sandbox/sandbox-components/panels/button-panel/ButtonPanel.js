import React from 'react'

import Button from '../../../../components/button/Button'
import PanelContainer from '../../panel-container/PanelContainer'

const ButtonPanel = () => {
  return (
    <PanelContainer title="Button">
      <Button onClick={() => alert('test')}
      >
        Test Button
      </Button>
    </PanelContainer>
  )
}

export default ButtonPanel