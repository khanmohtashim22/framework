import React from 'react'

import Block from '../../../block/Block'

import styles from './Content.module.scss'

const Content = ({ children }) => (
  <Block
    className={styles.content}
    layout={true}
    centered={true}
    px="16"
    pt="16"
    pb="24"
  >
    {children}
  </Block>
)

export default Content