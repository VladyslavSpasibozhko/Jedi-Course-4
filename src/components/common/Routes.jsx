import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import PlanetsWrappers from '../wrappers/PlanetsWrappers'
import PeopleWrapper from '../wrappers/PeopleWrapper'
import StarhipsWrapper from '../wrappers/StarhipsWrapper'

const routes = [
  {
    path:'/people',
    component:PeopleWrapper
  },
  {
    path:'/planets',
    component:PlanetsWrappers
  },
  {
    path:'/starships',
    component:StarhipsWrapper
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
