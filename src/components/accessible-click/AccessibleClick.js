import React from 'react'
import PropTypes from 'prop-types'

const AccessibleClick = ({ children, onClick }) => <div onClick={onClick}>{children}</div>

AccessibleClick.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default AccessibleClick