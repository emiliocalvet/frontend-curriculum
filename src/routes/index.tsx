import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import Login from '../pages/Login'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'
import FindCurriculum from '../pages/FindCurriculum'
import CurriculumView from '../pages/CurriculumView'
import AdmCurriculumView from '../pages/AdmCurriculumView'
import AdministrationPage from '../pages/AdministrationPage'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" component={Login} />
    <Route path="/find" component={FindCurriculum} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/curriculum/:key" component={CurriculumView} />

    {/* Protected Routes (to protect the route set isPrivate to true) */}
    <Route path="/adm" exact component={AdministrationPage} isPrivate={false} />
    <Route path="/adm/curriculum/:id" component={AdmCurriculumView} isPrivate={false} />
  </Switch>
)

export default Routes;


