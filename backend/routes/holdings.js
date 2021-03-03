require('dotenv').config()

const rp = require('request-promise');

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

const router = require('express').Router();
const fetch = require("node-fetch");
const Holding = require('../models/holding.model');

//fetch all holdings
router.route('/').get((req, res) => {
  Holding.find()
  .then(holdings => res.json(holdings))
  .catch(error => res.status(400).json('Error: ' + error));
});

//update holding
router.route('/update/:id').put((req, res) => {
  const _id = req.params.id;
  const _holding = req.body;
  const query = {'_id': _id};

  Holding.findOneAndUpdate(query, _holding, {upsert: true}, (error, document) => {
    if (error) {
      return res.send(500, {'error': error})
    }
    return res.json('Holding updated successfully!')
  })
})

//fetch holding by name
router.route('/holdingName').get((req, res) => {
  Holding.findOne({name: req.params.holdingName})
  .then(holding => res.json(holding))
  .catch(error => res.status(400).json('Error: '+ error))
})

//add one holding
router.route('/add').post((req, res) => {
  const holdingName = req.body.holdingName;
  const costBasis = req.body.costBasis;
  const amount = req.body.amount;
  const isCrypto = req.body.isCrypto || false;

  const newHolding = new Holding({"holdingName": holdingName, "costBasis": costBasis, "amount": amount, "isCrypto": isCrypto});

  newHolding.save()
  .then(() => res.json('Holding added!'))
  .catch(error => res.status(400).json('Error: '+ error));
});

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