import React from 'react'
import classnames from 'classnames'

const InputFeedback = ({ error }) =>
  error ? <div className="invalid-feedback">{error}</div> : null

const Label = ({ error, className, children, ...props }) => (
  <label className="label" {...props}>
    {children}
  </label>
)

const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    'form-group',
    {
      'animated shake error': !!error
    },
    className
  )
  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input
        id={id}
        className="form-control"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  )
}

export default TextInput
