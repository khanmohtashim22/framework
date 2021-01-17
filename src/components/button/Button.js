import React from 'react'
import PropTypes from 'prop-types'

import { getClasses } from '../../lib/style-utils/style-utils'

import styles from './Button.module.scss'

const Button = ({ children, onClick, forwardedRef, disabled, type, className, 'data-testid': dataTestId }) => (
  <button
    data-testid={dataTestId}
    onClick={onClick}
    ref={forwardedRef}
    disabled={disabled}
    className={getClasses({ styles, classes: ['button', disabled && 'disabled', type], className })}
  >
    {children}
  </button>
)

Button.defaultProps = {
  type: 'primary',
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  forwardedRef: PropTypes.object,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
  'data-testid': PropTypes.string
}

export default React.forwardRef((props, ref) => <Button {...props} forwardedRef={ref} />)