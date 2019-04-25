import React, { memo } from 'react'
const StatusMessage = props => {
  const { message = '' } = props
  return (
    <div>
      {message.length > 0 && (
        <p style={{ color: 'red' }}>{message.toLocaleLowerCase()}</p>
      )}
    </div>
  )
}
export default memo(StatusMessage)
