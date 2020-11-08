import React from 'react'

import { spaceStylesApi, getSpaceProps } from './support/config'
import { pluck } from '../../lib/prop-utils/prop-utils'

const WithSpace = Component => props => {
  const restOfProps = pluck(Object.keys(spaceStylesApi), props)
  const spaceProps = { style: { ...getSpaceProps(props), ...props.style } }
  return <Component {...restOfProps} {...spaceProps} />
}
  
export default WithSpace
