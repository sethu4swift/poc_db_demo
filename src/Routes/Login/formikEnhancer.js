import { withFormik } from 'formik'
import * as Yup from 'yup'
import { staticCredentials } from './staticCredentials'

export const formikEnhancer = withFormik({
  mapPropsToValues: () => ({ userName: '', password: '' }),
  validationSchema: Yup.object().shape({
    userName: Yup.string()
      .min(4, 'Min 4 character')
      .required('User name is required.'),
    password: Yup.string()
      .min(4, 'Min 4 character')
      .required('Password is required.')
    // email: Yup.string()
    //   .email('Invalid email address')
    //   .required('Email is required!'),
  }),
  handleSubmit: (payload, { setSubmitting, props, ...rest }) => {
    setTimeout(() => {
      console.log('pp>>>', rest)
      if (
        payload.userName === staticCredentials.username &&
        payload.password === staticCredentials.password
      ) {
        props.history && props.history.replace('/home')
        setSubmitting(true)
      } else {
        // alert("user name and password incorrect")
        rest.setErrors({
          apiError: 'invalid Credentials'
        })
      }
    }, 1000)
  },
  displayName: 'LoginForm'
})
