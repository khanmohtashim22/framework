import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'

import Routes from '../../lib/Routes'

const RoutesBuilder = () => (
  <Switch>
    {
      Routes.map((route, index) => {
        const { path, component } = route
        return <Route key={index} exact={true} path={path} component={component} />
      })
    }
  </Switch>
)

export default RoutesBuilder