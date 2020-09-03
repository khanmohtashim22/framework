import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Accordion = ({ open: initiallyOpened = false, children }) => {
  const [open, setOpen] = useState(initiallyOpened)
  const handleClick = () => {
    setOpen(!open)
  }
  const clonedChildren = React.Children.map(children, child => React.cloneElement(child, {
    open,
    handleClick,
  }))
  return (
    <>
      {clonedChildren}
    </>
  )
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
}

export default Accordion