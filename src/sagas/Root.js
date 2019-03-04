import { put, call, take, fork, race } from 'redux-saga/effects'
import * as authApiDriver from './services/providers/api/Auth'
import * as apiDriver from './services/providers/api/Index'
import * as history from '../history/browserHistory'
import * as authActions from '../actions/auth'
// import { Request as request, onLoginSuccessfull, appStore as appStorage } from 'callcenter2_react_components'
import io from 'socket.io-client'


export function* signInFlow() {
  while(true){
    try{
      const { payload } = yield take(`${authActions.login}`)
      yield call(authApiDriver.signin, payload.username, payload.password)
      yield fork(logoutFlow)

      yield fork(watchStartBackgroundApiTasks, request)
    } catch (e) {

    }
  }
}

export function* watchStartBackgroundApiTasks(req) {
  yield race({
    task: call(apiDriver.handler, req),
    cancel: take(`${oauthActions.cancelConnections}`)
  })
}


export function* logoutFlow(req) {
  while (true) {
    yield take(`${authActions.logout}`)
    yield call(authApiDriver.signout, req)
    yield put(authActions.cancelConnections())
  }
}

export function* onSagasLoginSuccessfull() {
  while (true) {
    const { payload } = yield take(`${authActions.received}`)
    yield call(onLoginSuccessfull, payload, history)
  }
}

export default function* root() {
  yield fork(signInFlow)
  yield fork(onSagasLoginSuccessfull)

  if(appStorage.loggedIn()){
    yield fork(logoutFlow)
    yield fork(watchStartBackgroundApiTask)
  }
}

