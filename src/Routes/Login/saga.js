import {
  LOGIN,
  LOGIN_INITIATED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  LOGOUT_CALL
} from './actionTypes'
import { takeLatest, call, put } from 'redux-saga/effects'
// import { loginAPI } from "./api";

export function* loginSaga() {
  yield takeLatest(LOGIN, workerSaga)
  console.log('watcher saga ')
  // yield takeLatest(LOGOUT, logoutWorkerSaga);
}

function* workerSaga(action) {
  console.log('workerSaga start')

  // try {
  // 	yield put({ type: LOGIN_INITIATED });
  // 	const response = yield call(loginAPI, action.payload.email, action.payload.password);
  // 	console.log(response);

  // 	if (response.registered) {
  // 		yield put({ type: LOGIN_SUCCESS, payload: response })
  // 		yield call(saveInLocalStorage, response)
  // 	} else {
  // 		console.log("response", response);
  // 		yield put({ type: LOGIN_FAILED, payload: response.message })
  // 		yield call(removeInLocalStorage)
  // 	}
  // }
  // catch (error) {
  // 	console.log(error)
  // }
}

// function* logoutWorkerSaga() {
// 	try {
// 		yield put({ type: LOGOUT_CALL });
// 		yield call(removeInLocalStorage)
// 	}
// 	catch (error) {
// 		console.log(error)
// 	}
// }

// const saveInLocalStorage = (response) => {
// 	localStorage.setItem('userData', JSON.stringify(response));
// }

// const removeInLocalStorage = () => {
// 	localStorage.removeItem('userData')
// }
