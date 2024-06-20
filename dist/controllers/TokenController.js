"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);


class TokenController {
  async store(req, res) {
    try {
      const { email = "", password = "" } = req.body;

      if (!email || !password) {
        return res.status(401).json({ errors: ["Credenciais invalidas"] });
      }

      const user = await _User2.default.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ errors: ["Usuário não existente"] });
      }

      if (!(await _bcryptjs2.default.compare(password, user.password_hash))) {
        return res.status(401).json({ errors: ["Credenciais invalidas"] });
      }

      const { id } = user;

      const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ token, user: { nome: user.nome, id, email } });
    } catch (error) {
      console.log(error);
      return res.json(null);
    }
  }
}

exports. default = new TokenController();
