// Esse arquivo define as configurações que seram utilizadas  no bando de dados
// como nome, linguagem, host, senha, nome de usuario, campos com datas.




require('dotenv').config()

module.exports = {

  dialect: 'mysql',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database:process.env.DATABASE,
  // pool: {
  //   max: 5, // número máximo de conexões no pool
  //   min: 0, // número mínimo de conexões no pool
  //   acquire: 30000, // tempo máximo, em milissegundos, que o pool tentará obter uma conexão antes de lançar um erro
  //   idle: 10000, // tempo máximo, em milissegundos, que uma conexão pode ficar ociosa antes de ser liberada
  // },
  dialectOptions: {
    connectTimeout: 60000 // tempo máximo de conexão, em milissegundos
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updateAt: 'update_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',

}
