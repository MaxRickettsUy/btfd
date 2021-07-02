const Holding = require('../models/holding.model');

const holdingsController = {
  getAll (req, res) {
    Holding.find()
    .then(holdings => res.json(holdings))
    .catch(error => res.status(400).json('Error: ' + error));
  },
  addHolding (req, res) {
    const holdingName = req.body.holdingName;
    const costBasis = req.body.costBasis;
    const amount = req.body.amount;
    const isCrypto = req.body.isCrypto || false;

    const newHolding = new Holding({"holdingName": holdingName, "costBasis": costBasis, "amount": amount, "isCrypto": isCrypto});

    newHolding.save()
    .then(() => res.json('Holding added!'))
    .catch(error => res.status(400).json('Error: '+ error));
  },
  getByName (req, res) {
    Holding.findOne({name: req.params.holdingName})
    .then(holding => res.json(holding))
    .catch(error => res.status(400).json('Error: '+ error));
  },
  updateById (req,res) {
    const _id = req.params.id;
    const _holding = req.body;
    const query = {'_id': _id};

    Holding.findOneAndUpdate(query, _holding, {upsert: true}, (error, document) => {
      if (error) {
        return res.send(500, {'error': error})
      }
      return res.json('Holding updated successfully!')
    })
  }
}

module.exports = holdingsController;