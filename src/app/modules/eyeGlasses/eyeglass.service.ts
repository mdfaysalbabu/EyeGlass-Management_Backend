import { Eyeglasses } from "./eyeglass.interface";
import { EyeglassesModel } from "./eyeglass.model";

const createProductIntoDB = async (payload: Eyeglasses) => {
  const result = await EyeglassesModel.create(payload);
  return result;
};

const getAllProductIntoDB = async () => {
  const result = await EyeglassesModel.find();
  return result;
};

const deleteProductIntoDB = async (id: string) => {
  const result = await EyeglassesModel.findByIdAndDelete(id);
  return result;
};

const updateProductIntoDB = async (
  id: string,
  payload: Partial<Eyeglasses>
) => {
  const result = await EyeglassesModel.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const EyeGlassServicesIntoDb = {
  createProductIntoDB,
  getAllProductIntoDB,
  deleteProductIntoDB,
  updateProductIntoDB,
};