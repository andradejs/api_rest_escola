import Aluno from "../models/Aluno";
import Foto from "../models/Foto"

class AlunoController{


  //listar todos os alunos do sistema
  async index(req,res){

    try {

      const alunos = await Aluno.findAll({
        attributes: ['id','nome','sobrenome','email','idade','peso','altura'],
        order:[['id','DESC'],[Foto,'id','DESC']],
        include: {
          model: Foto,
          attributes: ['url','filename']

        }
      })

      res.json(alunos)

    } catch (error) {

      console.log(error)
      res.json(null)
    }

  }


  //lista apenas um aluno
  async show(req,res){

    try {

      if(!req.params.id){

        res.status(401).json({
          error:["Id não existe"]
        })

      }

      const aluno = await Aluno.findByPk(req.params.id,{
        attributes: ['id','nome','sobrenome','email','idade','peso','altura'],
        order:[['id','DESC'],[Foto,'id','DESC']],
        include: {
          model: Foto,
          attributes: ['id','filename','originalname']

        }
      })

      if(!aluno){

        res.status(401).json({
          error:["aluno não existe"]
        })
      }

      res.json(aluno)

    } catch (error) {

      console.log(error)
      res.json(null)
    }
  }
  async store(req,res){

      try {


        const dados = await Aluno.create(req.body)
        res.json(dados)
      } catch (error) {

        console.log(error)
        res.status(401).json({erros : error.errors.map((err)=> err.messages)})
      }
  }

  //atualizar os dados de um aluno
  async update(req,res){

    try {

      if(!req.params.id){

        res.status(401).json({
          errors:["Id não existe"]
        })
      }

      const aluno = await Aluno.findOne({
        where:{
          id: req.params.id
        }
      })

      if(!aluno){
         res.status(404).json({
          errors: ["aluno não existe"]
         })
      }

      const dados = await aluno.update(req.body)

      res.json(dados)

    } catch (error) {

      console.log(error)
      res.json(null)
    }
  }
  async delete(req,res){

    try {

      if(!req.params.id){

        res.status().json({
          errors:["Id não existe"]
        })
      }

      const aluno = await Aluno.findByPk(req.params.id)

      if (!aluno){
        res.status(401).json({
          errors:["aluno não existe"]
        })
      }

      const alunoApagado = await aluno.destroy()
      res.json("aluno apagado")
    } catch (error) {
      res.json(null)
    }
  }


}

export default new AlunoController();
