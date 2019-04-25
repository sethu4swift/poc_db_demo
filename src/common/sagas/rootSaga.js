import { all, fork } from 'redux-saga/effects'
import { loginSaga } from '~/Routes/Login/saga'

export function* rootSaga() {
  console.log('root saga middle ware is running')
  yield all([fork(loginSaga)])
}
