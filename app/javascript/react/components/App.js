import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import IndexContainer from "./IndexContainer"
import UserContainer from "./UserContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexContainer}/>
        <Route exact path="/clubs" component={IndexContainer}/>
        <Route exact path="/user_profile" component={UserContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
