import React, { useState, useRef } from 'react'

import Button from '../../../../components/button/Button'
import PanelContainer from '../../panel-container/PanelContainer'

const ButtonPanel = () => {
  const [lastClicked, setLastClicked] = useState('')
  const [disabled, setDisabled] = useState(false)
  const buttonRef = useRef(null)

  return (
    <PanelContainer title="Button">


      <div>
        <input type="checkbox" id="disabled" name="disabled" onChange={() => setDisabled(!disabled)} />
        <label htmlFor="disabled">Disabled</label>
      </div>
      <div>
        <input type="checkbox" id="focus" name="focus" onChange={() => buttonRef.current.focus()} />
        <label htmlFor="focus">focus</label>
      </div>
      <div>Last Clicked: {lastClicked}</div>

      <Button 
        ref={buttonRef}
        disabled={disabled}
        onClick={() => setLastClicked('primary Button')}
      >
        PrimaryButton
      </Button>
     
      <input type="checkbox" />
    </PanelContainer>
  )
}

export default ButtonPanel