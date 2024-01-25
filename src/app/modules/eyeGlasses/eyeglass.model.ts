import mongoose, { Schema } from "mongoose";
import { Eyeglasses } from "./eyeglass.interface";

const eyeglassesSchema: Schema = new Schema(
  {
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productQuantity: { type: Number, required: true },
    frameMaterial: { type: String },
    frameShape: { type: String },
    lensType: { type: String },
    brand: { type: String },
    priceRange: { type: Number },
    gender: { type: String },
    color: { type: String },
    // Add other relevant filter parameters
  },
  {
    timestamps: true,
  }
);

export const EyeglassesModel = mongoose.model<Eyeglasses>(
  "Eyeglasses",
  eyeglassesSchema
);
