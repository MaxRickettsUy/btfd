import axios from 'axios'

export const getHoldings = () => {
  return (dispatch) => {
    return axios.get('http://localhost:5000/holdings/').then(
      (response) => {
        dispatch(createGetSuccess('GET_HOLDINGS', response.data))
      }
    ).catch((error) => {
      throw(error)
    })
  }
}

export const getHolding = (ticker) => {
  return (dispatch) => {
    return axios.get('http://localhost:5000/holdings/' +  ticker).then(
      (response) => {
        dispatch(createGetSuccess('GET_HOLDING', response.data))
      }
    ).catch((error) => {
      throw(error)
    })
  }
}

export const createGetSuccess = (actionType, data) => {
  let actionData = {};
  switch(actionType){
    case 'GET_HOLDINGS': 
      actionData = data;
      break;
    case 'GET_HOLDING':
      actionData = data;
      break;
    default:
  }

  return {
    type: actionType,
    payload: actionData
  }
}