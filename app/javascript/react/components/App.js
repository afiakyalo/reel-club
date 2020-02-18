import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import IndexContainer from "./IndexContainer"
import ClubContainer from "./ClubContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexContainer}/>
        <Route exact path="/clubs" component={IndexContainer}/>
        <Route exact path="/clubs/:id" component={ClubContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
