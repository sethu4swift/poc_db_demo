import React from 'react'
import './style.scss'

export const StatusIndicator = props => {
  return (
    <React.Fragment>
      <div className="StatusIndicator">
        <div className="status status-online" />
        <div className="">{'Welcome, Britney!'}</div>
      </div>
    </React.Fragment>
  )
}
