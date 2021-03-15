import React, { useState, useContext } from 'react'

import Button from '../../../../components/button/Button'
import Dialog from '../../../../components/modal/dialog/Dialog'
import ModalContext from '../../../../components/modal/support/context/ModalContext'
import ButtonContainer from '../../../../components/button-container/ButtonContainer'
import Block from '../../../../components/block/Block'

import PanelContainer from '../../panel-container/PanelContainer'

const DialogContext = React.createContext()

const Header = () => {
  const { longHeader } = useContext(DialogContext)
  return longHeader ? (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
  ) : (
    <div>Dialog Box header</div>
  )
}

const Content = () => {
  const { longContent, toggleLongContent, longHeader, toggleLongHeader, footerVariation, setFooterVariation } = useContext(DialogContext)
  return (
    <div>
      <Block pb={10}>
        <input type="checkbox" id="long-header" checked={longHeader} onChange={toggleLongHeader} />
        <label htmlFor="long-header">Long header</label>
      </Block>
      <Block pb={10}>
        <input type="checkbox" id="long-content" checked={longContent} onChange={toggleLongContent} />
        <label htmlFor="long-content">Long Content</label>
      </Block>
      <Block pb={10}>Footer Variation</Block>
      <Block pb={10}>
        <div>
          <input type="radio" name="footer-variation" id="single" value="single" checked={footerVariation === 'single'} onChange={() => setFooterVariation('single')} />
          <label htmlFor="single">Single Button</label>
        </div>
        <div>
          <input type="radio" name="footer-variation" id="double" value="double" checked={footerVariation === 'double'} onChange={() => setFooterVariation('double')} />
          <label htmlFor="double">Double Button</label>
        </div>
        <div>
          <input type="radio" name="footer-variation" id="inline" value="inline" checked={footerVariation === 'inline'} onChange={() => setFooterVariation('inline')} />
          <label htmlFor="inline">Inline Button</label>
        </div>
      </Block>
      {
        longContent ? (
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        ) : (
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        )
      }
    </div>
  )
}

const Footer = () => {
  const { close } = useContext(ModalContext)
  const { footerVariation } = useContext(DialogContext)
  if (footerVariation === 'single') {
    return (
      <ButtonContainer>
        <Button onClick={close}>Cancel</Button>
      </ButtonContainer>)
  }
  if (footerVariation === 'double') {
    return (
      <ButtonContainer>
        <Button onClick={() => alert('handle Continue')}>Continue</Button>
        <Button onClick={close} type="secondary">Cancel</Button>
      </ButtonContainer>
    )
  }
  return (
    <ButtonContainer inline={true}>
      <Button onClick={() => alert('handle Continue')}>Continue</Button>
      <Button onClick={close} type="secondary">Cancel</Button>
    </ButtonContainer>
  )
}

const DialogPanel = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [longContent, setLongContent] = useState(false)
  const [longHeader, setLongHeader] = useState(false)
  const [footerVariation, setFooterVariation] = useState('inline')
  const toggleDialog = () => setDialogOpen(false)
  const toggleLongContent = () => setLongContent(!longContent)
  const toggleLongHeader = () => setLongHeader(!longHeader)

  const context = {
    longContent,
    toggleLongContent,
    longHeader,
    toggleLongHeader,
    footerVariation,
    setFooterVariation
  }

  return (
    <PanelContainer title="Dialog">
      <Button onClick={() => setDialogOpen(true)}>Open Modal</Button>
      <DialogContext.Provider value={context}>
        <Dialog 
          isOpen={dialogOpen} 
          close={toggleDialog}
          header={Header}
          content={Content}
          footer={Footer}
        />
      </DialogContext.Provider>
    </PanelContainer>
  )
}

export default DialogPanel