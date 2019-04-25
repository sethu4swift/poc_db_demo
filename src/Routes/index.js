/* eslint-disable import/no-named-as-default */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'

import NotFoundPage from './NotFound'
import Login from './Login/Login'
import Header from '~/Shared/Components/Header'
import PropTypes from 'prop-types'
import React from 'react'
import { hot } from 'react-hot-loader'
import { PrivateRoutes } from './PrivateRoutes'
import Home from './HomePage'
import { selectLoginState } from './Login/selector'

const App = props => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route exact path="/login" component={Login} />
      <PrivateRoutes
        exact
        path="/home"
        component={Home}
        isLoggedIn={props.isLoggedIn}
      />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
)

App.propTypes = {
  children: PropTypes.element
}

const mapStateToProps = state => {
  return {
    isLoggedIn: selectLoginState(state)
  }
}
export default hot(module)(connect(mapStateToProps)(App))
