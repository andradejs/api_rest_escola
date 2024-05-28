import { Router } from "express";
import AlunoController from '../controllers/AlunoController'
import loginMiddlewares from "../middlewares/loginMiddlewares";

const router = new Router()

router.get('/:id', AlunoController.show)
router.get('/', AlunoController.index)

router.post('/',loginMiddlewares,AlunoController.store)
router.put('/:id',loginMiddlewares,AlunoController.update)
router.delete('/:id',loginMiddlewares, AlunoController.delete)

export default router;
