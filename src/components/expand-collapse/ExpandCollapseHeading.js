import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { getClasses } from '../../lib/style-utils/style-utils'
import Block from '../block/Block'
import ExpandCollapseIcon from '../icons/expand-collapse-icon/ExpandCollapseIcon'
import AccordionContext from '../accordion/AccordionContext'

import styles from './ExpandCollapse.module.scss'

const ExpandCollapseHeading = ({ children, open }) => {
  const nested = useContext(AccordionContext).level > 1
  return (
    <Block 
      data-testid="expand-collapse-heading"
      layout={true} 
      py={16} 
      center={true} 
      className={getClasses({ styles, classes: ['heading', open ? 'active' : 'inactive', nested && 'nested'] })}
    >
      <Block centered={true} mr={8}>
        <ExpandCollapseIcon open={open} nested={nested} />
      </Block>
      {children}
    </Block>
  )
}

ExpandCollapseHeading.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool
}

export default ExpandCollapseHeading