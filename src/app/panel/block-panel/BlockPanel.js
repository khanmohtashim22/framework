import React from 'react'

import Block from '../../../components/block/Block'

const BlockPanel = () => {
  return(
    <div>
      <Block el="p" data-testid="block-test" mb={22} px={10} py={45} style={{ color: 'red', backgroundColor: 'blue' }}>Moe</Block>
    </div>
  )
}

export default BlockPanel