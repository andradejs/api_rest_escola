import { Router } from "express";
import UserController from "../controllers/UserController";
import loginMiddlewares from "../middlewares/loginMiddlewares";

const router = new Router();

router.get("/", loginMiddlewares, UserController.show);
router.get("/", loginMiddlewares, UserController.index);

router.post("/", UserController.store);
router.put("/", loginMiddlewares, UserController.update);
router.delete("/", loginMiddlewares, UserController.delete);

export default router;
