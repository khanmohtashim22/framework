import React from 'react'
import PropTypes from 'prop-types'

import styles from './ExpandCollapse.module.scss'

const ExpandCollapseHeading = ({ children, open}) => (
  <div className={[styles.heading, open ? '' : styles.borderBottom].join(" ")}>
    <div className={styles.icon}>
      {
        open ? '-' : '+'
      }
    </div>
    <div>
      {children}
    </div>
  </div>
)

ExpandCollapseHeading.prototype = {
  children: PropTypes.node,
  open: PropTypes.bool
}

export default ExpandCollapseHeading