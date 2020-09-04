export const pluck = (keys, obj) => {
  const newObj = { ...obj }
  keys.forEach(key => delete newObj[key])
  return newObj
}