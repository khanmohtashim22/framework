import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Block from '../block/Block'
import { getClasses } from '../../lib/style-utils/style-utils'
import AccordionContent from '../accordion/AccordionContext'

import styles from './ExpandCollapse.module.scss'

const ExpandCollapseContent = ({ children }) => {
  const nested = useContext(AccordionContent).level > 1
  return (
    <Block 
      pl={nested ? 20 : 24} 
      pb={24} 
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