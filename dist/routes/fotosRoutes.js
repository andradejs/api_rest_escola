"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _FotosController = require('../controllers/FotosController'); var _FotosController2 = _interopRequireDefault(_FotosController);
var _loginMiddlewares = require('../middlewares/loginMiddlewares'); var _loginMiddlewares2 = _interopRequireDefault(_loginMiddlewares);

const router = new (0, _express.Router)();
router.post("/", _loginMiddlewares2.default, _FotosController2.default.store);

exports. default = router;
