import { z } from "zod";

const createSalesEyeValidationSchema = z.object({
  productId: z.string(),
  quantity: z.number(),
  buyerName: z.string(),
});

export const SalesEyeZodValidations = {
  createSalesEyeValidationSchema,
};
