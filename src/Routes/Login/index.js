import React from 'react'
import enhancer from './enhancer'
import { TextInput } from '~/Shared/Components/Formik'

const Login = ({
  values,
  touched,
  errors,
  dirty,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  isSubmitting
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id="email"
        type="email"
        label="Email"
        error={touched.email && errors.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="password"
        type="password"
        label="Password"
        error={touched.lastName && errors.lastName}
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  )
}

export default enhancer(Login)
