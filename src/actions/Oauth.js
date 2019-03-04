import { createAction } from 'redux-act'

export const login = createAction('login login')
export const refreshToken = createAction('login refresh token')

export const errorRequestRefreshToken = createAction('login error refresh token')
export const receivedRefreshToken = createAction('login received refresh token')

export const request = createAction('login request')
export const errorRequest = createAction('login error request')
export const received = createAction('login received')
export const logout = createAction('login logout')
export const clear = createAction('login clear data')

