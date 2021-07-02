import {darkTheme, lightTheme} from '../theme'

const getTheme = (themeString) => {
  return themeString === 'dark' ? darkTheme : lightTheme
}

export const initializeTheme = () => {
  return (dispatch) => {
    dispatch(createGetSuccess('INITIALIZE_THEME', getTheme(localStorage.getItem('btfd_theme') || 'dark')))
  }
}

export const toggleTheme = (themeString) => {
  return (dispatch) => {
    localStorage.setItem("btfd_theme", themeString)
    dispatch(createGetSuccess('TOGGLE_THEME', getTheme(themeString)))
  }
}

export const createGetSuccess = (actionType, data) => {
  let actionData = {};
  switch(actionType){
    case 'INITIALIZE_THEME':
      actionData = data;
      break;
    case 'TOGGLE_THEME':
      actionData = data;
      break;
    default:
  }

  return {
    type: actionType,
    payload: actionData
  }
}