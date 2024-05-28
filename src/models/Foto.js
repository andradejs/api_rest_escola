import Sequelize, { Model } from "sequelize"
import appConfig from "../config/appConfig";


export default class Foto extends Model {

  static async init(sequelize) {

    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: "O campo precisa ter ao menos um caracter"
          }
        }

      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',


        validate: {

          notEmpty: {
            msg: "O campo precisa ter ao menos um caracter"
          },

        }

      },
      url:{
        type: Sequelize.VIRTUAL,
        get(){
          return `${appConfig.url}/images/${this.getDataValue('filename')}`
        }

      }

    }, {
      sequelize,
      tableName: 'fotos'
    });

    await sequelize.sync({force: true});
    return this;
  }


  static associate(models){
    this.belongsTo(models.Aluno, {foreignKey: 'aluno_id'})

  }
}
