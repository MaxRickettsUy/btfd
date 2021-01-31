export default (state = {}, action) => {
  switch(action.type) {
    case 'GET_HOLDINGS':
    return {
      ...state,
      holdings: action.payload
    }
    case 'GET_HOLDING':
      return{
        ...state,
        holding: action.payload
      }
    default: return state
  }
}