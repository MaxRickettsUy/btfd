import axios from 'axios'

// const server = 'http://localhost:5000'

const normalizeTickerData = (tickerData) => {
  let data = tickerData.data['Time Series (Daily)']
  const lastDate = Object.keys(data)[0]
  let lastData = data[Object.keys(data)[0]]

  lastData.date = lastDate

  //get closing price for now
  return lastData["4. close"]
}

const normalizeCryptoData = (cryptoData, ticker) => {
  let data = cryptoData.data.data
  let price = data[ticker].quote.USD.price
  return price.toFixed(2)
}

export const getHoldings = () => {
  return (dispatch) => {
    return axios.get(`holdings/`).then(
      (success) => {
        dispatch(createGetSuccess('GET_HOLDINGS', success.data))
      }
    ).catch((error) => {
      throw(error)
    })
  }
}

export const addHolding = (values) => {
  return (dispatch) => {
    return axios.post(`holdings/add`, values).then(
      (success) => {
        dispatch(getHoldings())
      }
    ).catch((error) => {
      throw(error)
    })
  }
}

export const getPrices = ({id, ticker, holding}) => {
  return (dispatch) => {
    return axios.post(`holdings/holdingPrices/` + ticker, {"ticker": ticker, "isCrypto": holding.isCrypto}).then(
      (success) => {
        if(holding.isCrypto){
          holding.price = normalizeCryptoData(success.data, ticker)
        } else {
          holding.price = normalizeTickerData(success.data)
        }
        dispatch(updateHolding(id, holding))
      }
    ).catch((error) =>{
      throw(error)
    })
  }
}

export const updateHolding = (id, holding) => {
  return dispatch => {
    return axios.put(`holdings/update/${id}`, holding).then(
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