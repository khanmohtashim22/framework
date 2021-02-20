/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react'

import ModalRoot from './ModalRoot'

const withAppServices = Component => props => (
  <div>
    <ModalRoot />
    <Component {...props} />
  </div>
) 

export default withAppServices