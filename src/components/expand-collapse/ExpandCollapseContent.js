import React from 'react'
import PropTypes from 'prop-types'

import Block from '../block/Block'

import styles from './ExpandCollapse.module.scss'

const ExpandCollapseContent = ({ children }) => (
  <Block pl={24} pb={24} pt={12} className={styles.content}>
    {children}
  </Block>
)

ExpandCollapseContent.propTypes = {
  children: PropTypes.node
}

export default ExpandCollapseContent