import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './components/app'
import Perfiles from './components/perfiles'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App} name="sisinta" />

    <Route path='/perfiles' component={Perfiles}/>
  </Router>,
  document.getElementById('faz')
)
