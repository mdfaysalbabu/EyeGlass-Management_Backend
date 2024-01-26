import httpStatus from "http-status";

import { SalesServices } from "./sales.services";
import catchAsyncFunction from "../../utils/catchAsync";
import sendSuccessResponse from "../../utils/sendResponse";

const createSalesEyeGlass = catchAsyncFunction(async (req, res) => {
  const Sales = req.body;
  const result = await SalesServices.createSalesEyeIntoDB(Sales);

  sendSuccessResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Sales created successfully",
    data: result,
  });
});

const getAllSalesEyeGlass = catchAsyncFunction(async (req, res) => {
  const result = await SalesServices.getAllSalesEyeIntoDB(req.query);

  sendSuccessResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Sales retrieved successfully",
    data: result,
  });
});

export const SalesControllers = {
  createSalesEyeGlass,
  getAllSalesEyeGlass,
};
