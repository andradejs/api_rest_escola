"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoController {
  //listar todos os alunos do sistema
  async index(req, res) {
    try {
      const alunos = await _Aluno2.default.findAll({
        attributes: [
          "id",
          "nome",
          "sobrenome",
          "email",
          "idade",
          "peso",
          "altura",
        ],
        order: [
          ["id", "DESC"],
          [_Foto2.default, "id", "DESC"],
        ],
        include: {
          model: _Foto2.default,
          attributes: ["url", "filename"],
        },
      });

      res.json(alunos);
    } catch (error) {
      console.log(error);
      res.json(null);
    }
  }

  //lista apenas um aluno
  async show(req, res) {
    try {
      if (!req.params.id) {
        res.status(401).json({
          error: ["Id não existe"],
        });
      }

      const aluno = await _Aluno2.default.findByPk(req.params.id, {
        attributes: [
          "id",
          "nome",
          "sobrenome",
          "email",
          "idade",
          "peso",
          "altura",
        ],
        order: [
          ["id", "DESC"],
          [_Foto2.default, "id", "DESC"],
        ],
        include: {
          model: _Foto2.default,
          attributes: ["id", "filename", "originalname"],
        },
      });

      if (!aluno) {
        res.status(401).json({
          error: ["aluno não existe"],
        });
      }

      res.json(aluno);
    } catch (error) {
      console.log(error);
      res.json(null);
    }
  }
  async store(req, res) {
    try {
      const dados = await _Aluno2.default.create(req.body);
      res.json(dados);
    } catch (error) {
      console.log(error);
      res.status(401).json({ erros: error.errors.map((err) => err.messages) });
    }
  }

  //atualizar os dados de um aluno
  async update(req, res) {
    try {
      if (!req.params.id) {
        res.status(401).json({
          errors: ["Id não existe"],
        });
      }

      const aluno = await _Aluno2.default.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (!aluno) {
        res.status(404).json({
          errors: ["aluno não existe"],
        });
      }

      const dados = await aluno.update(req.body);

      res.json(dados);
    } catch (error) {
      console.log(error);
      res.json(null);
    }
  }
  async delete(req, res) {
    try {
      if (!req.params.id) {
        res.status().json({
          errors: ["Id não existe"],
        });
      }

      const aluno = await _Aluno2.default.findByPk(req.params.id);

      if (!aluno) {
        res.status(401).json({
          errors: ["aluno não existe"],
        });
      }

      const alunoApagado = await aluno.destroy();
      res.json(alunoApagado);
    } catch (e) {
      console.log(e);
      res.json(null);
    }
  }
}

exports. default = new AlunoController();
