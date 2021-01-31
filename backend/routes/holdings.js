require('dotenv').config()

const router = require('express').Router();
const fetch = require("node-fetch");
let Holding = require('../models/holding.model');
const apiKey = process.env.API_KEY;

const o_date = new Intl.DateTimeFormat;
const f_date = (m_ca, m_it) => Object({...m_ca, [m_it.type]: m_it.value});
const m_date = o_date.formatToParts().reduce(f_date, {});
const today = m_date.year + '-' + m_date.month + '-' + m_date.day;

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
  const newHolding = new Holding({holdingName, costBasis, amount});

  newHolding.save()
  .then(() => res.json('Holding added!'))
  .catch(error => res.status(400).json('Error: '+ error));
});

//get stonk data
//https://levelup.gitconnected.com/stocks-api-tutorial-with-javascript-40f24320128c
router.route('/holdingPrices/:ticker').get(async (req, res) => {
  const ticker = req.params.ticker

  const request = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&outputsize=compact&apikey=${process.env.API_KEY}`
  );

  res.json({
    data: await request.json()
  })
})

module.exports = router;