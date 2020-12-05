export const spaceStylesApi = {
  m: ['margin'],
  mt: ['marginTop'],
  mr: ['marginRight'],
  mb: ['marginBottom'],
  ml: ['marginLeft'],
  my: ['marginTop', 'marginBottom'],
  mx: ['marginRight', 'marginLeft'],
  p: ['padding'],
  pt: ['paddingTop'],
  pr: ['paddingRight'],
  pb: ['paddingBottom'],
  pl: ['paddingLeft'],
  py: ['paddingTop', 'paddingBottom'],
  px: ['paddingRight', 'paddingLeft'],
}

export const getSpaceProps = props => Object.keys(spaceStylesApi).reduce((spaceProps, spaceStylesProp) => {
  if (props.hasOwnProperty(spaceStylesProp)) {
    const spaceStyles = spaceStylesApi[spaceStylesProp]
    const styles = {}
    for (const spaceStyle of spaceStyles) {
      styles[spaceStyle] = `${props[spaceStylesProp]}px`
    }
    return { ...spaceProps, ...styles }    
  }
  return spaceProps
}, {})