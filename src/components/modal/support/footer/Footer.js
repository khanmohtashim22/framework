import React from 'react'

import Block from '../../../block/Block'

import styles from './Footer.module.scss'

const Footer = ({ children }) => (
  <Block p="16" className={styles.footer}>
    {children}
  </Block>
)

export default Footer