import React from 'react'
import PropTypes from 'prop-types'

import { getClasses } from '../../lib/style-utils/style-utils'

import styles from './ExpandCollapse.module.scss'

const ExpandCollapseHeading = ({ children, open }) => (
  <div className={getClasses({ styles, classes: ['heading', !open && 'borderBottom'] })}>
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

ExpandCollapseHeading.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool
}

export default ExpandCollapseHeading