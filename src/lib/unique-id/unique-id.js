const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const charSetSize = charSet.length

const unique = (length = 8) => {
  const id = []
  let randomPosition

  for(let i = 1; i <= length; i++) {
    randomPosition = Math.floor(Math.random() * charSetSize)
    id.push(charSet[randomPosition])
  }

  return id.join('') 

}

export default unique