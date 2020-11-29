import React from 'react'

import NavigationBar from './sandbox-components/navigation-bar/NavigationBar'
import Panel from './sandbox-components/panel/Panel'
import Block from '../components/block/Block'

const Sandbox = () => (
  <Block layout={true}>
    <NavigationBar />
    <Panel />
  </Block>
)
export default Sandbox
