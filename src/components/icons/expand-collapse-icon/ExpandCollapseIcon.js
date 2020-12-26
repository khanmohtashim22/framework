import React from 'react'
import PropTypes from 'prop-types'

import { getClasses } from '../../../lib/style-utils/style-utils'

import styles from './ExpandCollapseIcon.module.scss'

const ExpandCollapseIcon = ({ nested, open }) => {
  const width = nested ? '12' : '16'
  const translateXY = nested ? '6' : '8'
  const y = nested ? '5' : '7'
  const height = nested ? '12' : '16'
  const className = getClasses({ styles, classes: [nested ? 'nested' : 'unNested'] })

  return (
    <svg
      height={height}
      width={width}
      viewBox={`0 0 ${width} ${height}`}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        {
          open ? (
            <g>
              <rect x="0" y="0" width={width} height={height} />
              <rect className={className} x="0" y={y} width={width} height="2" rx="1" />
            </g>
          ) : (
            <g className={className}>
              <rect x="0" y={y} width={width} height="2" rx="1" />
              <rect
                transform={`translate(${translateXY}.000000, ${translateXY}.000000) rotate(90.000000) translate(-${translateXY}.000000, -${translateXY}.000000)`} 
                x="0"
                y={y}
                width={width}
                height="2"
                rx="1"
              />
            </g>
          )
        }
      </g>
    </svg>
  )
}

ExpandCollapseIcon.propTypes = {
  open: PropTypes.bool,
  nested: PropTypes.bool,
}

export default ExpandCollapseIcon