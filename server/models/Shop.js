const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    neighborhood: { type: Schema.Types.ObjectId, ref: "Location" },
    name: String,
    sector: String,
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    year: Number,
    lat: Number,
    lng: Number
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;
