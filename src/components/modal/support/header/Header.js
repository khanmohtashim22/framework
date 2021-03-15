import React from 'react'

import Block from '../../../block/Block'

import styles from './Header.module.scss'

const Header = ({ children }) => (
  <Block 
    p={16}
    className={styles.header}
  >
    {children}
  </Block>
)

export default Header