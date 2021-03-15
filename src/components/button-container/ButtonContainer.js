import React from 'react'

import { getClasses } from '../../lib/style-utils/style-utils'

import styles from './ButtonContainer.module.scss'

const ButtonContainer = ({ children, inline }) => {
  const classes = getClasses({ styles, classes: ['container', inline && 'inline'] })
  return (
    <div className={classes}>
      {
        React.Children.map(children, button => (
          <div className={styles.button}>
            {button}
          </div>
        ))
      }
    </div>
  )
}

export default ButtonContainer