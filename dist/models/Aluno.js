"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: _sequelize2.default.STRING,
        sobrenome: _sequelize2.default.STRING,
        email: _sequelize2.default.STRING,
        idade: _sequelize2.default.INTEGER,
        peso: _sequelize2.default.FLOAT,
        altura: _sequelize2.default.FLOAT,
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: "aluno_id" });
  }
} exports.default = Aluno;
