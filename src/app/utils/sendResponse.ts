/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "express";

type TSuccessResponse<T> = {
  statusCode: number;
  message?: string;
  success: boolean;
  data:T
};

const sendSuccessResponse = <T>(res: Response, data: TSuccessResponse<T>) => {
  res.status(data.statusCode).json({
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
  });
};

export default sendSuccessResponse;
