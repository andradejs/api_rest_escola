"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

class HomeController {
  async index(req, res) {
    const novoAluno = await _Aluno2.default.create({
      nome: "fabricio",
      sobrenome: "Andrade",
      email: "fabricio@gmail.com",
      idade: 43,
      peso: 45.4,
      altura: 2.4,
    });
    res.json(novoAluno);
  }
}

exports. default = new HomeController();
