// import * as accessActions from '../actions/access'
import * as authActions from '../actions/oauth'
//import { takeOut } from '../actions/websocket'

import { createReducer } from 'redux-act'
import { combineReducers } from 'redux'


const initial = {
  login: {
    payload: [],
    error: false,
    errorDetails: {}
  },
};

const login = createReducer({
  [authActions.request]: (state, payload) => {
    return { ...state, isFetching: true, error: initial.login.error }
  },
  [authActions.received]: (state, payload) => {
    return { ...state,
      isFetching: false,
      error: false,
      payload: payload,
    }
  },
  [authActions.clear]: (state, payload) => {
    return initial.login
  },
  [authActions.errorRequest]: (state, payload) => {
    return { ...state, isFetching: false, payload: {}, error: false, errorDetails: payload }
  },
}, initial.login)

export default combineReducers(
  {
    login
  }
}