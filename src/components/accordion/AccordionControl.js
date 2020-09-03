import React from 'react'
import PropTypes from 'prop-types'

import AccessibleClick from '../accessible-click/AccessibleClick'

const AccordionControl = ({ children, handleClick, open }) => {
  const clonedChildren = React.Children.map(children, child => React.cloneElement(child, { open }))
  return (
    <AccessibleClick onClick={handleClick}>
      {clonedChildren}
    </AccessibleClick>
  )
}

AccordionControl.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func
}

export default AccordionControl