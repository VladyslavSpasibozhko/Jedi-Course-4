import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import People from '../pages/People'
import Planets from '../pages/Planets'
import Starship from '../pages/Starship'
import NotFound from '../pages/NotFound'

const routes = [
  {
    path:'/people',
    component:People,
    exact:true
  },
  {
    path:'/planets',
    component:Planets,
    exact:true
  },
  {
    path:'/starship',
    component:Starship,
    exact:true
  },
]

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/people" />
      {
        routes.map(item => (
          <Route key={item.path} {...item} />
        ))
      }
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
