import React from 'react'

import RoutesBuilder from '../routes-builder/RoutesBuilder'

import styles from './Panel.module.scss'

const Panel = () => (
  <div className={styles['panel']}>
    <RoutesBuilder />
  </div>
)

export default Panel