import React from 'react'
import logo from './assets/logo.png'
import { StatusIndicator } from './StatusIndicator'

const isLoggedIn = true

const Header = () => (
  <nav className="row navbar whiteBackground justify-content-between">
    <img alt="Brand" style={{ height: '40px' }} src={logo} />
    <form class="form-inline">
      {isLoggedIn && (
        <StatusIndicator isOnline={true} name={'Welcome, Britney'} />
      )}
    </form>
  </nav>
)
export default Header
