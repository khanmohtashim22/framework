import React from 'react'
import PropTypes from 'prop-types'

import AccessibleClick from '../accessible-click/AccessibleClick'

const AccordionControl = ({ children, handleClick, open, el }) => {
  const Element = el
  const clonedChildren = React.Children.map(children, child => React.cloneElement(child, { open }))
  return (
    <AccessibleClick spaceKey={true}>
      <Element onAccessibleClick={handleClick} role="button" tabIndex="0">
        {clonedChildren}
      </Element>
    </AccessibleClick>
  )
}

AccordionControl.defaultProps = {
  el: 'div',
}

AccordionControl.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
  open: PropTypes.bool,
  el: PropTypes.string
}

export default AccordionControl