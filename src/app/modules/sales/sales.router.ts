import express from "express";

import { SalesControllers } from "./sales.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { SalesEyeZodValidations } from "./sales.validate";


const router = express.Router();

router.post(
  "/create-sales",
  validateRequest(SalesEyeZodValidations.createSalesEyeValidationSchema),
  SalesControllers.createSalesEyeGlass
);
router.get("/get-all-sales", SalesControllers.getAllSalesEyeGlass);

export const SalesRoutes = router;
