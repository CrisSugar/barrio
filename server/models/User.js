const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    neighborhood: { type: Schema.Types.ObjectId, ref: "Location" },
    username: String,
    password: String,
    role: { type: String, enum: ["client", "owner"] }
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
