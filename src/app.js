//app é o arquivo responsavel para especificar o que vai ser usado
//na aplicação como bibliotecas de desenvolvimento como também na
//estruturação como rotas, middlewares, conexão com bd etc..

import dotenv from "dotenv"; //serve para usar utilizar um arquivo com informações sensiveis
import { resolve } from "path";

dotenv.config();

import "./database";

import express from "express";
import cors from "cors";
import helmet from "helmet";

//import das rotas
import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/userRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import alunosRoutes from "./routes/alunoRoutes";
import fotosRoutes from "./routes/fotosRoutes";

const whiteList = ["http://localhost:3000"];

const corsOption = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOption));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(
      "/images/",
      express.static(resolve(__dirname, "..", "uploads", "images")),
    );
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunosRoutes);
    this.app.use("/fotos/", fotosRoutes);
  }
}

export default new App().app;
