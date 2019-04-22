import { withFormik } from 'formik'
import * as yup from 'yup'

export default withFormik({
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required!'),
    password: yup
      .string()
      .min(8)
      .max(16)
      .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$')
      .required()
  }),

  handleSubmit: (payload, { setSubmitting }) => {
    alert(payload.email)
    setSubmitting(false)
  }
})
