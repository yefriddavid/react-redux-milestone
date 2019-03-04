import * as apiAuthProvider from '../../../../services/providers/api/Auth'
import * as authActions from '../../../../actions/Auth'
import { call, put } from 'redux-saga/effects'



export function* signIn(data){
  try{
    yield put(authActions.request())
    const payload = yield call(authApiDriver.signIn, data)
    yield put(authActions.received(payload))
  } catch (e){
    yield put(authActions.errorRequest(e))
  }
}


export function* signOut(){
  try{
    yield call(apiAuthProvider.signOut)
    yield put(authActions.clear())
  } catch(e){
    yield put(authActions.errorRequest(e))
  }
}

