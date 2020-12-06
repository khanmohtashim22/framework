import layout from './layout'

const addFlexStyles = (props, style) => {
  let newStyle = {}

  if (props.layout) {
    newStyle = Object.assign(newStyle, style, layout.layout, layout.vertical)
    if (props.vertical) {
      newStyle = props.reverse ?
        Object.assign(newStyle, style, layout.verticalReverse) :
        Object.assign(newStyle, style, layout.vertical)
    } else {
      newStyle = props.reverse ?
        Object.assign(newStyle, style, layout.horisontalReverse) :
        Object.assign(newStyle, style, layout.horisontal)
    }

    if (props.wrap) {
      newStyle = Object.assign(newStyle, layout.wrap, style)
    }
  }

  if (props.inline) {
    newStyle = Object.assign(newStyle, style, layout.horisontal, layout.inline)
  }
  
  return newStyle
}

const addLayoutAlignStyles = (props, style) => {
  let newStyle = {}

  if (props.start) {
    newStyle = Object.assign(newStyle, style, layout.alignStart)
  }

  if (props.center) {
    newStyle = Object.assign(newStyle, style, layout.alignCenter)
  }

  if (props.end) {
    newStyle = Object.assign(newStyle, style, layout.alignEnd)
  }

  if (props.stretch) {
    newStyle = Object.assign(newStyle, style, layout.alignStretch)
  }

  if (props.centered) {
    newStyle = Object.assign(newStyle, style, layout.centered)
  }

  return newStyle
}

const addLayoutSelfStyles = (props, style) => {
  let newStyle = {}

  if (props.selfStart) {
    newStyle = Object.assign(newStyle, style, layout.selfAlignStart)
  }

  if (props.selfCenter) {
    newStyle = Object.assign(newStyle, style, layout.selfAlignCenter)
  }

  if (props.selfEnd) {
    newStyle = Object.assign(newStyle, style, layout.selfAlignEnd)
  }

  if (props.selfStretch) {
    newStyle = Object.assign(newStyle, style, layout.selfAlignStretch)
  }

  return newStyle
}

const addJustifyStyles = (props, style) => {
  let newStyle = {}
  
  if (props.justifyStart) {
    newStyle = Object.assign(newStyle, style, layout.justifyStart)
  }

  if (props.justifyCenter) {
    newStyle = Object.assign(newStyle, style, layout.justifyCenter)
  }

  if (props.justifyEnd) {
    newStyle = Object.assign(newStyle, style, layout.justifyEnd)
  }

  if (props.justifyBetween) {
    newStyle = Object.assign(newStyle, style, layout.justifyBetween)
  }

  if (props.justifyAround) {
    newStyle = Object.assign(newStyle, style, layout.justifyAround)
  }

  return newStyle
}

const getLayoutStyles = props => {
  const style = {}
  return Object.assign (
    {},
    addFlexStyles(props, style),
    addLayoutAlignStyles(props, style),
    addLayoutSelfStyles(props, style),
    addJustifyStyles(props, style)
  )
}

export default getLayoutStyles