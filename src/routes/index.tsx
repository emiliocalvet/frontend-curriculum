import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'
import FindCurriculum from '../pages/FindCurriculum'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" component={Login} />
    <Route path="/find" component={FindCurriculum} />
    <Route path="/register" component={RegisterPage} />
  </Switch>
)

export default Routes;


