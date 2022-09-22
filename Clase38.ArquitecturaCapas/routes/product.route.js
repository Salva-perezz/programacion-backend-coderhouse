import { Router } from "express";
import { productController } from "../controllers/index.js";

const router = Router();

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getOneProduct)
  .delete(productController.deleteProduct)
  .put(productController.updateProduct);

export default router;
