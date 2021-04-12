import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import FindCurriculum from '../pages/FindCurriculum'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" component={Login} />
    <Route path="/find" component={FindCurriculum} />
  </Switch>
)

export default Routes;


