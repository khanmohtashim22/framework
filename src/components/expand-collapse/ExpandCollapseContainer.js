import React from 'react'
import PropTypes from 'prop-types'

import styles from './ExpandCollapse.module.scss'

const ExpandCollapseContainer = ({ children }) => <div className={styles.container}>{children}</div>

ExpandCollapseContainer.prototype = {
  children: PropTypes.node,
}

export default ExpandCollapseContainer