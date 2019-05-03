import React from 'react'
import classnames from 'classnames'
import { Label, InputFeedback } from '.'
import './TextInput.css'
export const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  placeholder,
  ...props
}) => {
  return (
    <React.Fragment>
      {error && (
        <div className="tooltip11">
          <span class="tooltiptext11">{error}</span>
        </div>
      )}
      <div style={{ position: 'relative' }}>
        {/* {error && <div className='toolTip'></div>}<div className="input-group mb-3"> */}
        <input
          // className={error ? 'form-control is-invalid' : "form-control"}
          className={error ? 'inputTextCustomWithError' : 'inputTextCustom'}
          id={id}
          type={type || 'text'}
          value={value}
          onChange={onChange}
          {...props}
          required
        />
        <span className="floating-label">Your email address</span>
      </div>
      {/* <InputFeedback error={error} /> */}
      {/* </div> */}
    </React.Fragment>
  )
}

// const InputFeedback = ({ error }) =>
//   error ? <div className="invalid-feedback">{error}</div> : null

// const Label = ({ error, className, children, ...props }) => (
//   <label className="label" {...props}>
//     {children}
//   </label>
// )

// const TextInput = ({
//   type,
//   id,
//   label,
//   error,
//   value,
//   onChange,
//   className,
//   ...props
// }) => {
//   const classes = classnames(
//     'form-group',
//     {
//       'animated shake error': !!error
//     },
//     className
//   )
//   return (
//     <div className={classes}>
//       <Label htmlFor={id} error={error}>
//         {label}
//       </Label>
//       <input
//         id={id}
//         className="form-control"
//         type={type}
//         value={value}
//         onChange={onChange}
//         {...props}
//       />
//       <InputFeedback error={error} />
//     </div>
//   )
// }
// export default TextInput
