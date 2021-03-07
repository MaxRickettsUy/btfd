import axios from 'axios'

const server = process.env.NODE_ENV === 'production' ? '/auth' : 'http://localhost:5000/auth'

export const isLoggedIn = () => {
  return (dispatch) => {
    return false
  }
}

export const clearRegistrationStatus = () => {
  return (dispatch) => {
    dispatch(createGetSuccess('CLEAR_STATUS', {}))
  }
}

export const welcome = () => {
  return (dispatch) => {
    return axios.get(`${server}/welcome`, {withCredentials: true}).then(
      (success) => {
        dispatch(createGetSuccess('AUTH_SUCCESS', {}))
      }
    ).catch((error) => {
      // console.error(error)
    })
  }
}

//https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs
export const login = (user) => {
  return (dispatch) => {
    return axios.post(`${server}/login`, user).then(
      (success) => {
        document.cookie = `token=${success.data.token}`
        dispatch(createGetSuccess('AUTH_SUCCESS', {}))
      }
    ).catch((error) => {
      dispatch(createGetError('LOGIN_FAILURE', {status: 'FAILURE', message: error.response.data.message}))
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    dispatch(createGetSuccess('LOGOUT_SUCCESS', {}))
  }
}

export const register = (user) => {
  return (dispatch) => {
    return axios.post(`${server}/register`, user).then(
      (success) => {
        dispatch(createGetSuccess('REGISTRATION_SUCCESS', {status: 'SUCCESS', message: "Successfully registered!"}))
      }
    ).catch((error) => {
      dispatch(createGetError('REGISTRATION_FAILURE', {status: 'FAILURE', message: error.response.data.message}))
    })
  }
}

// axios.post(`${url}`, {contentToBeSent}, { withCredentials: true })

export const createGetSuccess = (actionType, data) => {
  let actionData = {};
  switch(actionType) {
    case 'CLEAR_STATUS':
      actionData = data;
      break;
    case 'IS_LOGGED_IN':
      actionData = data;
      break;
    case 'AUTH_SUCCESS':
      actionData = data;
      break;
    case 'LOGOUT_SUCCESS':
      actionData = data;
      break;
    case 'REGISTRATION_SUCCESS':
      actionData = data;
      break;
    default:
  }

  return {
    type: actionType,
    payload: actionData
  }
}

export const createGetError = (actionType, data) => {
  let actionData = {};
  switch(actionType) {
    case 'LOGIN_FAILURE':
      actionData = data;
      break;
    case 'REGISTRATION_FAILURE':
      actionData = data;
      break;
    default:
  }

  return {
    type: actionType,
    payload: actionData
  }
}