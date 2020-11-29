import React from 'react'
import PropTypes from 'prop-types'

import WithSpace from '../with-space/WithSpace'
import WithLayout from '../with-layout/WithLayout'

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

export default WithLayout(WithSpace(Block))