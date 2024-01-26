import httpStatus from "http-status";
import catchAsyncFunction from "../../utils/catchAsync";
import sendSuccessResponse from "../../utils/sendResponse";
import { EyeGlassServicesIntoDb } from "./eyeglass.service";

const createEyeGlassProduct = catchAsyncFunction(async (req, res) => {
  const User = req.body;
  const result = await EyeGlassServicesIntoDb.createProductIntoDB(User);

  sendSuccessResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "EyeGlass Product Created successfully",
    data: result,
  });
});

const getAllEyeGlassProduct = catchAsyncFunction(async (req, res) => {
  const result = await EyeGlassServicesIntoDb.getAllProductIntoDB(req.query);

  sendSuccessResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "EyeGlass Products retrieved successfully",
    data: result,
  });
});

const updateEyeGlassProduct = catchAsyncFunction(async (req, res) => {
  const { id } = req.params;
  const newProduct = req.body;
  const result = await EyeGlassServicesIntoDb.updateProductIntoDB(
    id,
    newProduct
  );
  //   send response
  sendSuccessResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "EyeGlass Products Updated successfully",
    data: result,
  });
});

const deleteEyeGlassProduct = catchAsyncFunction(async (req, res) => {
  const { id } = req.params;
  const result = await EyeGlassServicesIntoDb.deleteProductIntoDB(id);
  sendSuccessResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "EyeGlass Products deleted successfully",
    data: result,
  });
});



export const ProductController = {
  createEyeGlassProduct,
  getAllEyeGlassProduct,
  deleteEyeGlassProduct,
  updateEyeGlassProduct,
};
