const authReducer = (state = {}, action) => {
  switch(action.type) {
    case 'CLEAR_STATUS':
      return {
        ...state,
        authStatus: action.payload
      }
    case 'IS_LOGGED_IN':
      return {
        ...state,
        authenticated: action.payload
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        authStatus: action.payload
      }
    case 'AUTH_SUCCESS':
      return {
        ...state,
        authStatus: action.payload,
        authenticated: true
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        authStatus: {},
        authenticated: false
      }
    case 'REGISTER':
      return {
        ...state,
        user: action.payload
      }
    case 'REGISTRATION_SUCCESS':
      return {
        ...state,
        authStatus: action.payload
      }
    case 'REGISTRATION_FAILURE':
      return {
        ...state,
        authStatus: action.payload
      }
    default: return state
  }
}

export default authReducer;