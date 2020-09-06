import React from 'react'
import PropTypes from 'prop-types'

import styles from './ExpandCollapse.module.scss'

const ExpandCollapseContent = ({ children }) => (
  <div className={styles.content}>
    {children}
  </div>
)

ExpandCollapseContent.propTypes = {
  children: PropTypes.node
}

export default ExpandCollapseContent