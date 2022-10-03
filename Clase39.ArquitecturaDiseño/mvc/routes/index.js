import { Router } from "express";
import menuController from "../controllers/menu.controller.js";

const router = Router();

router.get("/menu", menuController.getMenu);

export default router;
