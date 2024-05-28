//app é o arquivo responsavel para especificar o que vai ser usado
//na aplicação como bibliotecas de desenvolvimento como também na
//estruturação como rotas, middlewares, conexão com bd etc..

import dotenv from 'dotenv' //serve para usar utilizar um arquivo com informações sensiveis
import {resolve} from 'path'

dotenv.config()

import './src/database'

import express from 'express'
import homeRoutes from './src/routes/homeRoutes'
import userRoutes from './src/routes/userRoutes'
import tokenRoutes from './src/routes/tokenRoutes'
import alunosRoutes from './src/routes/alunoRoutes'
import fotosRoutes from './src/routes/fotosRoutes'

class App {
  constructor() {

    this.app = express();
    this.middlewares();
    this.routes();

  }

  middlewares() {

    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    this.app.use(express.static(resolve(__dirname,'uploads')))

  }

  routes(){
    this.app.use('/',homeRoutes)
    this.app.use('/users/',userRoutes)
    this.app.use('/tokens/',tokenRoutes)
    this.app.use('/alunos/',alunosRoutes)
    this.app.use('/fotos/',fotosRoutes)
  }
}

export default new App().app
