import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import AccordionContext from './AccordionContext'

const Accordion = ({ open: initiallyOpened = false, children, onOpen, onClose, onToggle }) => {
  const [open, setOpen] = useState(initiallyOpened)
  const { level } = useContext(AccordionContext)
  const handleClick = () => {
    if(!open && onOpen) {
      onOpen()
    }
    if (open && onClose) {
      onClose()
    }
    if (onToggle) {
      onToggle()
    }
    setOpen(!open)
  }
  const clonedChildren = React.Children.map(children, child => React.cloneElement(child, {
    open,
    handleClick,
  }))
  return (
    <AccordionContext.Provider value={{ level: level + 1 }}>
      {clonedChildren}
    </AccordionContext.Provider>
  )
}

Accordion.displayName = 'Accordion'

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onToggle: PropTypes.func,
}

export default Accordion