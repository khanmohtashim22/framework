import React from 'react'
import PropTypes from 'prop-types'
import _debounce from 'lodash/debounce'

import unique from '../../lib/unique-id/unique-id'
import { pluck } from '../../lib/prop-utils/prop-utils'

const _sendClick = fn => fn()
const sendClick = _debounce(_sendClick)

const AccessibleClick = ({ children, enterKey, arrowDownKey, spaceKey, tabKey }) => {
  const accessibleId = unique()
  const onClick = event => {
    event.stopPropagation()
    event.preventDefault()
    sendClick(children.props.onAccessibleClick)
  }

  const onKeyDown = event => {
    if (accessibleId === event.target.getAttribute('data-accessible-id')) {
      if (
        (enterKey && event.key === 'Enter') ||
        (arrowDownKey && event.key === 'ArrowDown') ||
        (spaceKey && event.key === ' ') ||
        (tabKey && event.key === 'Tab')
      ) {
        event.stopPropagation()
        event.preventDefault()
        sendClick(children.props.onAccessibleClick)
      }
    }
  }

  const child = React.Children.only(children)
  const { ...childProps } = child.props
  const updatedChildProps = {
    onClick,
    onKeyDown,
    'data-accessible-id': accessibleId,
    ...(pluck(['onAccessibleClick'], childProps)),
  }
  return React.createElement(child.type, updatedChildProps)
}

AccessibleClick.defaultProps = {
  enterKey: true,
  arrowDownKey: false,
  spaceKey: false,
  tabKey: false,
}

AccessibleClick.propTypes = {
  children: PropTypes.node.isRequired,
  enterKey: PropTypes.bool,
  arrowDownKey: PropTypes.bool,
  spaceKey: PropTypes.bool,
  tabKey: PropTypes.bool,
}

export default AccessibleClick