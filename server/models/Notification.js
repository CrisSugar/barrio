models/offer-model.js

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const notificationSchema = new Schema({
  commentary: String,
  
  //populado por Id de tienda
},{
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
});

const Notification = mongoose.model('Notification', offerSchema);

module.exports = Offer;