import express from "express";
import { ProductController } from "./product.controller";
import { admin, protect } from "../../middlewares/authMiddleware";

const router = express.Router();

router.post("/create-product", ProductController.createProducts);
router.get("/all-products", ProductController.GetProducts);
router.get("/single-product/:id", ProductController.GetSingleProduct);
router.delete(
  "/delete-product/:id",
  admin,
  ProductController.DeleteSingleProduct
);
router.patch(
  "/update-product/:id",
  admin,
  ProductController.UpdateSingleProduct
);

export const ProductsRouter = router;
