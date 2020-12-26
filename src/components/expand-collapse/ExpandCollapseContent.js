import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Block from '../block/Block'
import { getClasses } from '../../lib/style-utils/style-utils'
import AccordionContext from '../accordion/AccordionContext'

import styles from './ExpandCollapse.module.scss'

const ExpandCollapseContent = ({ children }) => {
  const nested = useContext(AccordionContext).level > 1
  const hasNest = React.Children.map(children, child => React.isValidElement(child) && child.type.displayName === 'Accordion').includes(true)
  return (
    <Block
      data-testid="expand-collapse-content"
      pl={nested ? 20 : 24} 
      pb={hasNest ? 0 : 24} 
      pt={12} 
      className={getClasses({ styles, classes: ['content', nested && 'nested'] })}
    >
      {children}
    </Block>
  )
}

ExpandCollapseContent.propTypes = {
  children: PropTypes.node
}

export default ExpandCollapseContent