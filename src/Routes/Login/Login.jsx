import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Formik, Field } from 'formik'
import { Button } from 'reactstrap'

import { validateEmail, validatePassword } from '~/common/helpers/validators'
import { InputBox } from '~/Shared/FormComponents/inputBox/InputBox'
import { doLoginAction } from './actionCreators'
import { selectLoginState, selectErrorMessage } from './selector'
import StatusMessage from '~/Shared/Components/statusMessage/StatusMessage'

class Login extends Component {
  componentDidUpdate() {
    this.props.isLoggedIn && this.props.history.replace('/home')
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => {
            this.props.login(values)
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>
              <Field
                name="email"
                component={InputBox}
                type={'email'}
                validate={validateEmail}
                placeholder={'Email Id'}
              />
              <Field
                name="password"
                component={InputBox}
                type={'password'}
                placeholder={'Password'}
                validate={validatePassword}
              />
              <br />
              <Button type={'submit'} color="primary" className="px-4">
                LOGIN
              </Button>
              <Button
                title="LOG IN"
                type={'button'}
                color="danger"
                className="px-4"
                onClick={() =>
                  alert('username ->faiz@swiftwin.com \n password-> faizan')
                }
              >
                FORGOT PASSWORD
              </Button>
              <br />
              <br />
              <StatusMessage message={this.props.feedBackMessage} />
            </form>
          )}
        </Formik>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: selectLoginState(state),
    feedBackMessage: selectErrorMessage(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: values => dispatch(doLoginAction(values))
  }
}

export default (Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login))
