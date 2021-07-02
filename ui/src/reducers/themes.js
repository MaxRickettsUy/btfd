const themesReducer = (state = {}, action) => {
  switch(action.type) {
    case 'INITIALIZE_THEME':
      return {
        ...state,
        theme: action.payload
      }
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: action.payload
      }
    default: return state
  }
}

export default themesReducer