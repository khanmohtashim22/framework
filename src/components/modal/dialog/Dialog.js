import React from 'react'

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

export default Dialog