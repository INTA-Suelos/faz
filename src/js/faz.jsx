import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './components/app'
import Home from './components/home'
import Perfiles from './components/perfiles'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/perfiles' component={Perfiles}/>
    </Route>
  </Router>,
  document.getElementById('faz')
)
