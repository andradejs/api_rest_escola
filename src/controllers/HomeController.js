import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
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

export default new HomeController();
