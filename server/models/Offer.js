models/offer-model.js

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const offerSchema = new Schema({
  product: String,
  prize: Number,
  offerPrize: Number,
  year: Number
  //populado por tienda
},{
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;