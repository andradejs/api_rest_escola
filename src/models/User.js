import Sequelize, { Model } from "sequelize"
import bcryptjs from 'bcryptjs'

// const sequelize = new Sequelize;

export default class User extends Model {

  static async init(sequelize) {

    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: "O campo nome deve ter entre 3 e 255 caracteres"
          }
        }

      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',

        unique:{
          msg: "Email já existe"
        },
        validate: {

          isEmail: {
            msg: "Email inválido"
          },

        }

      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: "A senha precisa ter entre 6 e 50 caracteres"
          }
        }

      },
    }, {
      sequelize
    });
    this.addHook('beforeSave', async user => {
      if (user.password){
        user.password_hash = await bcryptjs.hash(user.password, 8)

      }


    })
    await sequelize.sync({force: true});
    return this;
  }
}
