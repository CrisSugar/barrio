const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    neighborhood: { type: String, enum: ["Delicias", "La Almozara", "Centro"] },
    username: String,
    password: String,
    role: { type: String, enum: ["client", "owner"] },
    clientData: {
      comments: [String]
    },
    ownerData: {
      shopId: { type: Schema.Types.ObjectId, ref: "Shop" },
      comments: [String]
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
