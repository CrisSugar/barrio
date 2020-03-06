models/offer-model.js

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const offerSchema = new Schema({
  location: { type: String, enum: ["Delicias", "La Almozara", "Centro"] },
  shop: { type: Schema.Types.ObjectId, ref: "Shop" },
  product: String,
  prize: Number,
  offerPrize: Number,
  image: String
  
},{
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;