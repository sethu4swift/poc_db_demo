/* eslint-disable import/no-named-as-default */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import NotFoundPage from './NotFound';
import Header from './Components/Header';
import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
