
import User from "../models/User"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'



class TokenController{

  async store(req,res){
    try {

      const {email = '', password = ''} = req.body

      if (!email || !password){
        return res.status(401).json({errors :['Credenciais invalidas']})
      }

      const user = await User.findOne({where: {email}})

      if (!user){
        return res.status(401).json({errors:['Usuário não existente']})
      }

      if (! await bcryptjs.compare(password,user.password_hash)){
        return res.status(401).json({errors :['Credenciais invalidas']})
      }

      const {id} = user

      const token = jwt.sign( {id,email}, process.env.TOKEN_SECRET,{
        expiresIn: process.env.TOKEN_EXPIRATION
      })

      return res.json({token})

    } catch (error) {
      console.log(error)
      return res.json(null)
    }
  }
}

export default new TokenController()
