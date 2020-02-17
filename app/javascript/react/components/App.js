import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import IndexContainer from "./IndexContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexContainer}/>
        <Route exact path="/clubs" component={IndexContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
