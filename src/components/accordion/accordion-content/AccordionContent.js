import React from 'react'
import PropTypes from 'prop-types'

const AccordionContent = ({ children, open }) => open ? (
  <div>
    {children}
  </div>
) : null


AccordionContent.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool
}

export default AccordionContent