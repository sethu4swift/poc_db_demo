import React from 'react'
import classnames from 'classnames'

export const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  )
}
