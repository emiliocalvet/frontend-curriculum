import React, { useContext } from 'react'
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect
} from 'react-router-dom'

import { Context } from '../context/AuthContext'

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const auth = useContext(Context)

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === auth.authenticated ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/adm' }} />
        )
      }}
    />
  )
}

export default Route