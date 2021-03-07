require('dotenv').config()

const fetch = require("node-fetch");
const router = require('express').Router();
const rp = require('request-promise');
const holdingsController = require('../controllers/holdings');

const fetchCoinmarketCap = (ticker) => {
  const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
    qs: {
      //'id': '1',
        'convert': 'USD',
        'symbol': ticker
    },
    headers: {
      'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_API_KEY
    },
    json: true,
    gzip: true
  };

  return requestOptions
}

//fetch all holdings
router.get('/', holdingsController.getAll);

//update holding
router.put('/update/:id', holdingsController.updateById);

//fetch holding by name
router.get('/holdingName', holdingsController.getByName)

//add one holding
router.post('/add', holdingsController.addHolding);

//get stonk data
//https://levelup.gitconnected.com/stocks-api-tutorial-with-javascript-40f24320128c
router.route('/holdingPrices/:ticker').post(async (req, res) => {
  const ticker = req.body.ticker
  const isCrypto = req.body.isCrypto || false

  if(isCrypto){
    rp(fetchCoinmarketCap(ticker)).then(response => {
      res.json({
        data: response
      })
    }).catch((err) => {
      console.log('API call error:', err.message);
      res.status(400).json('Error: ' + err)
    });
  }

  const request = await fetch(
    `https://www.alphavantage.co/query?function=`+
    `TIME_SERIES_DAILY_ADJUSTED&symbol=${req.params.ticker}` +
    `&outputsize=compact&apikey=${process.env.ALPHA_ADVANTAGE_API_KEY}`
  );

  res.json({
    data: await request.json()
  })
})

module.exports = router;