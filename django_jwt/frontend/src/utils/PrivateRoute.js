import React from 'react'
import { Route } from 'react-router-dom'

function PrivateRoute({children, ...rest}) {
    console.log('Private Route works')
  return (
    <Route {...rest}>{children}</Route>
  )
}

export default PrivateRoute