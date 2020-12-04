import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import NavigationBar from './sandbox-components/navigation-bar/NavigationBar'
import Panel from './sandbox-components/panel/Panel'

const Sandbox = () => (
  <Router>
    <NavigationBar />
    <Panel />
  </Router>
)
export default Sandbox
