import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../Modal'

const Dialog = ({ header, content, footer, ...restOfProps }) => {
  return (
    <Modal {...restOfProps} >
      <div>
        {header}
        {content}
        {footer}
      </div>
    </Modal>
  )
}

Dialog.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.node,
  ])
}

export default Dialog