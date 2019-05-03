import React from 'react'
import classnames from 'classnames'

export const InputFeedback = ({ error }) =>
  error ? (
    <div className="invalid-feedback" style={{ display: 'block' }}>
      {error}
    </div>
  ) : null
