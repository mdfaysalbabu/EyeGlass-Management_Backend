import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { eyeGlassValidation } from "./eyeglass.validate";
import { ProductController } from "./eyeglass.controller";

const router = express.Router();

router.post(
  "/add-product",
  validateRequest(eyeGlassValidation.createEyeglassesSchema),
  ProductController.createEyeGlassProduct
);
router.get("/get-all-products", ProductController.getAllEyeGlassProduct);
router.put("/update-product/:id", ProductController.updateEyeGlassProduct);
router.delete("/delete-product/:id", ProductController.deleteEyeGlassProduct);

// Add other routes for filtering and sales management

export const eyeGlassRoutes = router;
