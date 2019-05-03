import React from 'react'
import './style.scss'

export const StatusIndicator = props => {
  return (
    <div className="header">
      <div className="status status-online" />
      <div className="">{'Welcome, Britney!'}</div>
    </div>
  )
}
