const holdingsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_HOLDING':
      return {
        ...state
      }
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
    case 'GET_PRICES': 
      return {
        ...state,
        prices: action.payload
      }
    default: return state
  }
}

export default holdingsReducer;