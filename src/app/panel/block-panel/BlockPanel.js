import React from 'react'

import Block from '../../../components/block/Block'

const BlockPanel = () => {
  return(
    <Block>
      <Block el="h1">Moe</Block>
      <Block el="h1" data-testid="block-test">Moe</Block>
      <Block el="h1" data-testid="block-test">Moe</Block>
    </Block>
  )
}

export default BlockPanel