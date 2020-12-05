import React from 'react'

import Block from '../../../components/block/Block'

const PanelContainer = ({ title, children }) => (
  <Block p={16}>
    <Block el="h1" m={0} pb={26}>{title}</Block>
    {children}
  </Block>
)

export default PanelContainer