import React, { Fragment } from 'react'
import { formikEnhancer } from './formikEnhancer'
import { TextInput, Label } from '~/Shared/Components/Formik'

function _Login(props) {
  const {
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props
  return (
    <Fragment>
      <div className="xycenter">
        <div className="row justify-content-center align-items-center">
          <div
            className="align-self-center col-sm-6"
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '0',
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="card" style={{ width: '457px' }}>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <h3
                    className="copper"
                    style={{
                      fontFamily: 'font-family: Montserrat',
                      fontSize: '24px'
                    }}
                  >
                    {'Welcome back!'}
                  </h3>
                  <h4 className="light-navy">{'Login to your account'}</h4>
                  <TextInput
                    id="userName"
                    type="text"
                    placeholder="Username"
                    error={touched.userName && errors.userName}
                    value={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <TextInput
                    id="password"
                    type="password"
                    placeholder="Password"
                    error={touched.password && errors.password}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {console.log('is ', isSubmitting, dirty)}
                  <button
                    type="submit"
                    className={
                      dirty
                        ? 'btn-button-normal btn rounded-pill w-100'
                        : 'btn-button-inactive btn rounded-pill w-100'
                    }
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                  <Label error={errors}>
                    {errors.apiError && errors.apiError}
                  </Label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

const Login = formikEnhancer(_Login)

export default Login
