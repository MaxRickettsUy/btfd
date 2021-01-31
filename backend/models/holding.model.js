const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const holdingSchema = new Schema({
    holdingName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    costBasis: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    amount: {
        type: String,
        required: true,
        unique: false,
        trim: true
    }
}, {
    timestamps: true
});



const Holding = mongoose.model('Holding', holdingSchema);

module.exports = Holding;