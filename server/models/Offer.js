
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const offerSchema = new Schema({
  neighbourhood: { type: String, enum: ["Delicias", "La Almozara", "Centro"] },
  shop: String,
  product: String,
  prize: String,
  offerPrize: String,
  image: String
},{
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;