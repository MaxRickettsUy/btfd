import axios from 'axios'

const server = 'http://localhost:5000'

// const extractTickerNames = (data) => {
//   const tickers = []
//   data.forEach((value) => {tickers.push(value.holdingName.toUpperCase())})
//   return tickers
// }

const normalizeTickerData = (tickerData) => {
  let data = tickerData.data['Time Series (Daily)']
  const lastDate = Object.keys(data)[0]
  let lastData = data[Object.keys(data)[0]]

  lastData.date = lastDate

  //get closing price for now
  return lastData["4. close"]
}

export const getHoldings = () => {
  return (dispatch) => {
    return axios.get(`${server}/holdings/`).then(
      (success) => {
        dispatch(createGetSuccess('GET_HOLDINGS', success.data))
        // dispatch(getPrices(tickers))
      }
    ).catch((error) => {
      throw(error)
    })
  }
}

export const addHolding = (values) => {
  return (dispatch) => {
    return axios.post(`${server}/holdings/add`, values).then(
      (success) => {
        dispatch(getHoldings())
      }
    ).catch((error) => {
      throw(error)
    })
  }
}

export const getPrices = ({ticker, id, holding}) => {
  return (dispatch) => {
    return axios.get(`${server}/holdings/holdingPrices/` + ticker).then(
      (success) => {
        holding.price = normalizeTickerData(success.data)
        dispatch(updateHolding(id, holding))
      }
    ).catch((error) =>{
      throw(error)
    })
  }
}

export const updateHolding = (id, holding) => {
  return dispatch => {
    console.log(id)
    console.log(holding)
    return axios.put(`${server}/holdings/update/${id}`, holding).then(
      (success) => {
        dispatch(getHoldings())
      }
    )
  }
}

export const createGetSuccess = (actionType, data) => {
  let actionData = {};
  switch(actionType){
    case 'ADD_HOLDING': 
      actionData = data;
      break;
    case 'UPDATE_PRICE':
      actionData = data;
      break;
    case 'GET_HOLDINGS': 
      actionData = data;
      break;
    case 'GET_HOLDING':
      actionData = data;
      break;
    case 'GET_PRICES':
      actionData = data;
      break;
    default:
  }

  return {
    type: actionType,
    payload: actionData
  }
}