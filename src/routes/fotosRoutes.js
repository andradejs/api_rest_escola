import { Router } from "express";
import FotosController from "../controllers/FotosController";
import loginMiddlewares from "../middlewares/loginMiddlewares";

const router = new Router();
router.post("/", loginMiddlewares, FotosController.store);

export default router;
