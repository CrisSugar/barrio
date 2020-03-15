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
    owner: String,
    offers: [
      {
        comments: String
      }
    ],
    year: Number,
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
