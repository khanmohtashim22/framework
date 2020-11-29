export const pluck = (keys, obj) => {
  const newObj = { ...obj }
  keys.forEach(key => delete newObj[key])
  return newObj
}

export const pick = (keys, obj) => {
  const newObj= {}
  keys.forEach(key => {
    if(typeof obj[key] !== 'undefined') {
      newObj[key] = obj[key]
    }
  })
  return newObj
}