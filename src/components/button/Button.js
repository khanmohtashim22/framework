import React from 'react'
import PropTypes from 'prop-types';

const Button = ({ children, onClick, forwardedRef, disabled }) => {
  return (
    <button
      onClick={onClick}
      ref={forwardedRef}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  forwardedRef: PropTypes.object,
  disabled: PropTypes.bool
}

export default React.forwardRef((props, ref) => <Button {...props} forwardedRef={ref} />)