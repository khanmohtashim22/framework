export const spaceStylesApi = {
  m: ['margin'],
  mt: ['margin-top'],
  mr: ['margin-right'],
  mb: ['margin-bottom'],
  ml: ['margin-left'],
  my: ['margin-top', 'margin-bottom'],
  mx: ['margin-right', 'margin-left'],
  p: ['padding'],
  pt: ['padding-top'],
  pr: ['padding-right'],
  pb: ['padding-bottom'],
  pl: ['padding-left'],
  py: ['padding-top', 'padding-bottom'],
  px: ['padding-right', 'padding-left'],
}

export const getSpaceProps = props => Object.keys(spaceStylesApi).reduce((spaceProps, spaceStylesProp) => {
  if (props.hasOwnProperty(spaceStylesProp)) {
    const spaceStyles = spaceStylesApi[spaceStylesProp]
    const styles = {}
    for (const spaceStyle of spaceStyles) {
      styles[spaceStyle] = `${props[spaceStylesProp]}px`
    }
    return {...spaceProps, ...styles}    
  }
  return spaceProps
}, {})