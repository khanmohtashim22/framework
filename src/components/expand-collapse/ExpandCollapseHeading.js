import React from 'react'
import PropTypes from 'prop-types'

import { getClasses } from '../../lib/style-utils/style-utils'
import Block from '../block/Block'
import ExpandCollapseIcon from '../icons/expand-collapse-icon/ExpandCollapseIcon'

import styles from './ExpandCollapse.module.scss'

const ExpandCollapseHeading = ({ children, open }) => (
  <Block 
    layout={true} 
    py={16} 
    center={true} 
    className={getClasses({ styles, classes: ['heading', open ? 'active' : 'inactive'] })}
  >
    <Block centered={true} mr={8}>
      <ExpandCollapseIcon open={open} />
    </Block>
    {children}
  </Block>
)

ExpandCollapseHeading.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool
}

export default ExpandCollapseHeading