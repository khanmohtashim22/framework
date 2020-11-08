import React from 'react'
import PropTypes from 'prop-types'

import WithSpace from '../with-space/WithSpace'

const Block = ({ children, el, ...restOfProps }) => {
  const Element = el
  return (
    <Element {...restOfProps}>
      {children}
    </Element>
  )
}

Block.defaultProps = {
  el: 'div'
}

Block.propTypes = {
  children: PropTypes.node.isRequired,
  el: PropTypes.string,
}

export default WithSpace(Block)