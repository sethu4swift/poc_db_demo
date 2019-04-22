import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './theme.scss'
import store from './reducers'
import Routes from './Routes'
import * as serviceWorker from './serviceWorker'

let App = () => (
  <Provider store={store}>
    <div className="container">
      <Routes />
    </div>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
