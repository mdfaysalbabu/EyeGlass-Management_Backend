import { Schema, model } from "mongoose";
import { TSales } from "./sales.interface";

const saleSchema = new Schema<TSales>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: "Eyeglasses",
    },
    quantity: { type: Number, required: true },
    buyerName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const SalesEye = model<TSales>("Sale", saleSchema);