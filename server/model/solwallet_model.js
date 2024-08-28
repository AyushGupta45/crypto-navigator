import mongoose, { Schema } from "mongoose";

const solWalletSchema = new Schema(
  {
    publicKey: {
      type: String,
      required: true,
    },
    privateKey: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SolWallet = mongoose.model("SolWallet", solWalletSchema);

export default SolWallet;
