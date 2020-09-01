import React from 'react'
import PropTypes from 'prop-types'

import styles from './ExpandCollapse.module.scss'

const ExpandCollapseContent = ({ children }) => {
  return (
    <div className={styles.content}>
      {children}
    </div>
  )
}

ExpandCollapseContent.prototype = {
  children: PropTypes.node
}

export default ExpandCollapseContent