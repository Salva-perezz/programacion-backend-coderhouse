import { Router } from "express";
import { productController } from "../controllers/index.js";
import { checkRole } from "../middlewares/checkRoles.js";

const router = Router();

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getOneProduct)
  .delete(checkRole.checkIfUserIsAdmin, productController.deleteProduct)
  .put(checkRole.checkIfUserIsAdmin, productController.updateProduct);

export default router;
