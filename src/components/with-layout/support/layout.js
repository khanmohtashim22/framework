const layout = {
  display: 'flex',
  flexWrap: 'nowrap'
}

const wrap = {
  flexWrap: 'wrap'
}

const inline = {
  display: 'inline-flex'
}

const horisontal = Object.assign({}, layout, {
  flexDirection: 'row'
})

const horisontalReverse = Object.assign({}, layout, {
  flexDirection: 'row-reverse'
})

const vertical = Object.assign({}, layout, {
  flexDirection: 'column'
})

const verticalReverse = Object.assign({}, layout, {
  flexDirection: 'column-reverse'
})

const alignStart = {
  alignItems: 'flex-start'
}

const alignCenter = {
  alignItems: 'center'
}

const alignEnd = {
  alignItems: 'flex-end'
}

const alignStretch = {
  alignItems: 'stretch'
}

const selfAlignStart = {
  alignSelf: 'flex-start'
}

const selfAlignCenter = {
  alignSelf: 'center'
}

const selfAlignEnd = {
  alignSelf: 'flex-end'
}

const selfAlignStretch = {
  alignSelf: 'stretch'
}

const justifyStart = {
  justifyContent: 'flex-start'
}

const justifyCenter = {
  justifyContent: 'center'
}

const justifyEnd = {
  justifyContent: 'flex-end'
}

const justifyBetween = {
  justifyContent: 'space-between'
}

const justifyAround = {
  justifyContent: 'space-around'
}

const centered = Object.assign({}, layout, alignCenter, justifyCenter)

export default {
  centered: centered,
  layout: layout,
  wrap: wrap,
  inline: inline,
  horisontal: horisontal,
  horisontalReverse: horisontalReverse,
  vertical: vertical,
  verticalReverse: verticalReverse,
  alignStart: alignStart,
  alignCenter: alignCenter,
  alignEnd: alignEnd,
  alignStretch: alignStretch,
  selfAlignStart: selfAlignStart,
  selfAlignCenter: selfAlignCenter,
  selfAlignEnd: selfAlignEnd,
  selfAlignStretch: selfAlignStretch,
  justifyStart: justifyStart,
  justifyCenter: justifyCenter,
  justifyEnd: justifyEnd,
  justifyBetween: justifyBetween,
  justifyAround: justifyAround,
}