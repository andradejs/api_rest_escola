//Server é um arquivo no qual é executado o comando para
//escutar uma determinda porta e checar o serviço que o
//cliente está requisitando. Aqui vemos o app que foi im-
//portado do arquivo app executando essa requisições.


import app from  './app'

const port = 3001

app.listen(port, ()=>{
  console.log()
  console.log(`Escutando na porta ${port}`)
  console.log(`CTRL + click  em http://localhost:${port}`)
})
