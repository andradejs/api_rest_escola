import User from "../models/User"

//store -cria um dado
//index -lista dados
// show -aprensenta só um dado
// update -atualiza um dado existente
// delete -deleta dados



class UserController {

  async store(req, res) {
    try {

      const usuario = req.body
      const novoUser = await User.create(usuario)

      res.json(novoUser)

    } catch (e) {

      console.log(e)
      res.status(400).json({ erros: e.errors.map((err) => err.message) })

    }
  }

  async index(req, res) {

    try {
      const usuarios = await User.findAll({ attributes: ['id','nome',  'email']})
      return res.json(usuarios)

    } catch (error) {
      console.log(error)
      return res.json(null)

    }
  }


  async show(req, res) {

    try {

      const foundUser = await User.findByPk(req.userId)
      const {id,name, email} =  foundUser

      return res.json({id,name,email})

    } catch (error) {

      console.log(error)
      return res.json(null)

    }
  }

  async update(req, res) {

    try {

      const user = await User.findByPk(req.userId)

      if (!user) {
        return res.status(400).json({
          errors:   ['User does not exist']
        })
      }

      const updateUser = await user.update(req.body)
      return res.json(updateUser)

    } catch (error) {
      console.log(error)
      return res.json(null)
    }
  }

  async delete(req, res) {

    try {


      const user = await User.findByPk(req.userId)

      if (!user) {

        return res.status(400).json({
          errors: ['Id does not exist']
        })

      }

      await user.destroy()

      return res.json(user)

    } catch (error) {
      return res.json(null)
    }

  }
}

export default new UserController()
