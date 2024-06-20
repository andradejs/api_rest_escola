"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);
var _loginMiddlewares = require('../middlewares/loginMiddlewares'); var _loginMiddlewares2 = _interopRequireDefault(_loginMiddlewares);

const router = new (0, _express.Router)();

router.get("/:id", _AlunoController2.default.show);
router.get("/", _AlunoController2.default.index);

router.post("/", _loginMiddlewares2.default, _AlunoController2.default.store);
router.put("/:id", _loginMiddlewares2.default, _AlunoController2.default.update);
router.delete("/:id", _loginMiddlewares2.default, _AlunoController2.default.delete);

exports. default = router;
