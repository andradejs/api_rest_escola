"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginMiddlewares = require('../middlewares/loginMiddlewares'); var _loginMiddlewares2 = _interopRequireDefault(_loginMiddlewares);

const router = new (0, _express.Router)();

router.get("/", _loginMiddlewares2.default, _UserController2.default.show);
router.get("/", _loginMiddlewares2.default, _UserController2.default.index);

router.post("/", _UserController2.default.store);
router.put("/", _loginMiddlewares2.default, _UserController2.default.update);
router.delete("/", _loginMiddlewares2.default, _UserController2.default.delete);

exports. default = router;
