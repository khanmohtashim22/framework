import React from 'react'
import PropTypes from 'prop-types'

import Block from '../../../block/Block'

import styles from './Overlay.module.scss'

const Overlay = ({ children }) => (
  <Block 
    layout={true}
    horizontal={true}
    centered={true}
    className={styles.overlay}
  >
    {children}
  </Block>
)

Overlay.propTypes = {
  children: PropTypes.node,
}

export default Overlay