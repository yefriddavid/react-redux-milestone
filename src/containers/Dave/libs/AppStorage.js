let localStorage
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = global.window.localStorage
} else {
  localStorage = sessionStorage
}

const PREFIX_SESSION_KEYS = process.env.REACT_APP_PREFIX_SESSION_KEYS || `default`

export const getRefreshToken = () => {
  const { refresh_token } = getDataStorage() || { refresh_token: false }
  return refresh_token
}
export const getAccessToken = () => {
  const { access_token } = getDataStorage() || { access_token: false }
  return access_token
}

export function getDataStorage(){
  if( loggedIn() === false )
    return  undefined

  const serializedState = localStorage.getItem(`${PREFIX_SESSION_KEYS}.auth`)
  return JSON.parse(serializedState)
}

export function setSessionInfoData(data){
  let beginAt = new Date()

  data = { ...data, beginAt }
  setDataStorage(data)
  return true
}

export function setDataStorage(data){
  sessionStorage.removeItem(`${PREFIX_SESSION_KEYS}.auth`)
  const serializedState = JSON.stringify(data)
  sessionStorage.setItem(`${PREFIX_SESSION_KEYS}.auth`, serializedState)
  return true
}
export const getBeginAt = () => {
  if( loggedIn() === false )
    return  undefined
  const { beginAt } = getDataStorage()
  return new Date(beginAt)

}
export const getExpiresIn = () => {
  if( loggedIn() === false )
    return  undefined
  const { expires_in } = getDataStorage() || { expires_in: 0 }
  return expires_in
}
export const getFinishAt = () => {
  if( loggedIn() === false )
    return  undefined
  else{
    let beginAt = getBeginAt()
    let finishAt = new Date(beginAt)

    finishAt.setSeconds(finishAt.getSeconds() + getExpiresIn())

    return finishAt
  }
}


export function loggedIn() {
  const serializedState = localStorage.getItem(`${PREFIX_SESSION_KEYS}.auth`)
  if( serializedState === null )
    return false
  else
    return true

}

export function getHeaders(){
  let headers = []
  headers['Authorization'] = 'Bearer ' + getAccessToken()
  return headers
}
export const clearSignData = (data) => {
  localStorage.removeItem(`${PREFIX_SESSION_KEYS}.auth`)
}
export function fullLoggedIn() {
  if(loggedIn() === true){
    let beginAt = getBeginAt()
    if(beginAt){
      const expires_in = getExpiresIn()
      const diff = (new Date() - beginAt) / 1000
      const liveTime = expires_in - diff

      if(liveTime > 0){
        return true
      }else{
        //console.log("murio el tiempo")
      }
    }
  }

  return false
}


