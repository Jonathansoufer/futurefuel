import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LoginContainer from '../screens/LoginContainer'
import ForgotContainer from '../screens/ForgotContainer'
import RecoverContainer from '../screens/RecoverContainer'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={LoginContainer} />
      <Route path='/forgot' component={ForgotContainer} />
      <Route path='/recover' component={RecoverContainer} />
    </Switch>
  </Router>
)

export default Routes
