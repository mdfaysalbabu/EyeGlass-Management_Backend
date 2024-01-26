import { TSales } from "./sales.interface";
import { SalesEye } from "./sales.model";

const createSalesEyeIntoDB = async (payload: TSales) => {
  const result = await SalesEye.create(payload);
  return result;
};

const getAllSalesEyeIntoDB = async (query: Record<string, unknown>) => {
  const { filter } = query;

  let filterDate: Record<string, unknown> = {};

  if (filter) {
    const currentDate = new Date();

    switch (filter) {
      case "daily":
        filterDate = {
          createdAt: {
            $gte: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate()
            ),
            $lt: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate() + 1
            ),
          },
        };
        break;
      case "weekly":
        filterDate = {
          createdAt: {
            $gte: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate() - currentDate.getDay()
            ),
            $lt: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              currentDate.getDate() + (6 - currentDate.getDay()) + 1
            ),
          },
        };
        break;
      case "monthly":
        filterDate = {
          createdAt: {
            $gte: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              1
            ),
            $lt: new Date(
              currentDate.getFullYear(),
              currentDate.getMonth() + 1,
              1
            ),
          },
        };
        break;
      case "yearly":
        filterDate = {
          createdAt: {
            $gte: new Date(currentDate.getFullYear(), 0, 1),
            $lt: new Date(currentDate.getFullYear() + 1, 0, 1),
          },
        };
        break;
      default:

        break;
    }
  }

  const result = await SalesEye.find(filterDate).populate("productId");
  return result;
};

export const SalesServices = {
  createSalesEyeIntoDB,
  getAllSalesEyeIntoDB,
};
