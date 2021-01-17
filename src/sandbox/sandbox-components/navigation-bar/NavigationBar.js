import React from 'react'
import { Link } from 'react-router-dom'

import Block from '../../../components/block/Block'
import Routes from '../../lib/Routes'

import styles from './NavigationBar.module.scss'

const NavigationBar = () => (
  <div className={styles['navigation-bar']}>
    <Link to="/" className={styles['logo']}>
      Framework
    </Link>
    <ul className={styles['list']}>
      {
        Routes.filter(({ path }) => path !== '/').map((route, index) => {
          const { path, name } = route
          return (
            <Block el="li" key={index}>
              <Link to={path} className={styles['link']}>{name}</Link>
            </Block>
          )
        })
      }
    </ul>
  </div>
)

export default NavigationBar