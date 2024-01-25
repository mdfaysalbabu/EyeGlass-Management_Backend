import { TSales } from "./sales.interface";
import { SalesEye } from "./sales.model";

const createSalesEyeIntoDB = async (payload: TSales) => {
  const result = await SalesEye.create(payload);
  return result;
};

const getAllSalesEyeIntoDB = async () => {
  const result = await SalesEye.find().populate("productId");
  return result;
};

export const SalesServices = { createSalesEyeIntoDB, getAllSalesEyeIntoDB };
