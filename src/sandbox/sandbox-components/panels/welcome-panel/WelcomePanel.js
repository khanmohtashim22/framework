import React from 'react'

import Block from '../../../../components/block/Block'

import styles from './WelcomePanel.module.scss'

const WelcomePanel = () => (
  <Block className={styles['welcome-panel']} centered={true}>
    <div className={styles['header']}>
      Moe's Framework
    </div>
  </Block>
)

export default WelcomePanel