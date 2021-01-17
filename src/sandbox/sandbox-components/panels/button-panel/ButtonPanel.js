import React, { useState, useRef } from 'react'

import Button from '../../../../components/button/Button'
import Block from '../../../../components/block/Block'
import PanelContainer from '../../panel-container/PanelContainer'

import styles from './ButtonPanel.module.scss'

const ButtonPanel = () => {
  const [lastClicked, setLastClicked] = useState('')
  const [disabled, setDisabled] = useState(false)
  const buttonRef = useRef(null)

  const focus = () => {
    buttonRef.current.focus()
  }

  return (
    <PanelContainer title="Button">

      <Block pb={16}>
        <input type="checkbox" id="disabled" name="disabled" onChange={() => setDisabled(!disabled)} />
        <label htmlFor="disabled">Disabled</label>
      </Block>

      <Block pb={16}>
        <input type="checkbox" id="focus" name="focus" onChange={focus} />
        <label htmlFor="focus">focus</label>
      </Block>

      <Block el="h3" m={0} pb={16}>Last Clicked: {lastClicked}</Block>

      <Block>
        <Button
          ref={buttonRef}
          disabled={disabled}
          onClick={() => setLastClicked('primary Button')}
          type="primary"
          className={styles.test}
        >
          Primary
        </Button>
        <Button
          disabled={disabled}
          onClick={() => setLastClicked('secondary Button')}
          type="secondary"
        >
          Secondary
        </Button>

      </Block>
    </PanelContainer>
  )
}

export default ButtonPanel