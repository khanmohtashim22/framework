import React from 'react'

import Block from '../../../components/block/Block'
import RoutesBuilder from '../routes-builder/RoutesBuilder'

import styles from './Panel.module.scss'

const Panel = () => (
  <Block className={styles['panel']} p={16}>
    <RoutesBuilder />
  </Block>
)

export default Panel