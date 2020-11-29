import React from 'react'

import layoutPropNames from './support/layout-props'
import getLayoutStyles from './support/get-layout-styles'
import { pick, pluck } from '../../lib/prop-utils/prop-utils'

const WithLayout = Component => props => {
  const layoutProps = pick(layoutPropNames, props)
  const restOfProps = pluck(layoutPropNames, props)
  const styleProps = { style: Object.assign({}, props.style, getLayoutStyles(layoutProps)) }
  return <Component {...restOfProps} {...styleProps} />
}

export default WithLayout