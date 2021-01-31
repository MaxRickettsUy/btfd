const router = require('express').Router();
let Holding = require('../models/holding.model');

//fetch all holdings
router.route('/').get((req, res) => {
    Holding.find()
    .then(holdings => res.json(holdings))
    .catch(error => res.status(400).json('Error: ' + error));
});

//fetch holding by name
router.route('/:holding').get((req, res) => {
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

module.exports = router;