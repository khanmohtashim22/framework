import React from 'react'

import Block from '../../../components/block/Block'

import styles from './Panel.module.scss'

const Panel = () => {
  return (
    <Block className={styles['panel']} p={16}>
      Panel
    </Block>
  )
}

export default Panel