const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    neighbourhood: { type: String, enum: ["Delicias", "La Almozara", "Centro"] },
    name: String,
    sector: String,
    description: String,
    imageUrl: String,
    mobile: Number,
    web: String,
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    offers: [
      {
        comments: String
      }
    ],
    year: Number,
    location: {
      lat: Number,
      lng: Number
    }
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
