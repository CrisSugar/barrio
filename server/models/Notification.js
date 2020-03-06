const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const notificationSchema = new Schema({
  neighbourhood: { type: String, enum: ["Delicias", "La Almozara", "Centro"] },
  commentary: String,
},{
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
});

const Notification = mongoose.model("Notification", offerSchema);

module.exports = Notification;