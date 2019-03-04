import { Request as req } from 'callcenter2_react_components'

export const access = () => {
   return new Promise((resolve, reject) => {
      req.post(`/session/access`, {  },
        {
          headers: {
            'Accept': 'application/json'
          }
        }
      ).then(function (res){
        resolve(res)
      }).catch(error => {
          reject(error)
      })
     })
}

export const refreshToken = () => {
  return new Promise((resolve, reject) => {
    req.post(
      `/oauth/token`, {
      'grant_type': 'refresh_token',
      'refresh_token': sessionStorage.getRefreshToken(),
      'client_id': process.env.REACT_APP_API_CLIENT_ID,
      'client_secret': process.env.REACT_APP_API_CLIENT_SECRET,
      'scope': process.env.REACT_APP_API_SCOPE
    },
    {
      headers: {
        'Accept': 'application/json'
      }
    }).then(function (res){
        resolve(res)
      });
    })
}

export function signin (user, pass) {
  return new Promise((resolve, reject) => {
    req.post(`/oauth/token`,
      {
        username: user,
        password: pass,
        grant_type: 'password',
        scope: process.env.REACT_APP_API_SCOPE,
        client_secret: process.env.REACT_APP_API_CLIENT_SECRET,
        client_id: process.env.REACT_APP_API_CLIENT_ID
      }
      ,
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    ).then(function (res){

      resolve(res)
    }).catch(function(error){
      reject(error)
    })
  })
}

export function signout () {
  return new Promise((resolve, reject) => {

    let currentDate = new Date()
    req.delete('/session/access/' + currentDate.toString() /*, {
        method: "DELETE",
        headers: {
          'Accept': 'application/json',
        }
      }*/)
      .then(response => {
        resolve(true)
      }).catch(error => {
        resolve(error)
      })
  })
}

export function scopes () {
  return new Promise((resolve, reject) => {
    return req('/oauth/scopes', {
        method: "GET",
        headers: {
          'Accept': 'application/json',
        }
      })
      .then(response => {
        resolve(response)
      }).catch(error => {
          reject(error)
      })
  })
}
export const register = (req, username, password) => {
  return req.post('/register', {username, password})
    .then(() => signin(username, password))
}

