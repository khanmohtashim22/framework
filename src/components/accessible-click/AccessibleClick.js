import React from 'react'
import PropTypes from 'prop-types'

const AccessibleClick = ({ children }) => <div>{children}</div>

AccessibleClick.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AccessibleClick