/* eslint-disable import/no-named-as-default */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './HomePage'
import NotFoundPage from './NotFound'
import Login from './Login'
import Header from '~/Shared/Components/Header'
import PropTypes from 'prop-types'
import React from 'react'
import { hot } from 'react-hot-loader'

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
)

App.propTypes = {
  children: PropTypes.element
}

export default hot(module)(App)
