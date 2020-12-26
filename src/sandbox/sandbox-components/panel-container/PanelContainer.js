import React from 'react'
import Proptypes from 'prop-types'

import Block from '../../../components/block/Block'

import styles from './PanelContainer.module.scss'

const PanelContainer = ({ title, children }) => (
  <Block p={16}>
    <Block el="h1" m={0} pb={26} className={styles.title}>{title}</Block>
    {children}
  </Block>
)

PanelContainer.propTypes = {
  title: Proptypes.string,
  children: Proptypes.node
}

export default PanelContainer