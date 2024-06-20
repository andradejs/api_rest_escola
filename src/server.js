//Server é um arquivo no qual é executado o comando para
//escutar uma determinda porta e checar o serviço que o
//cliente está requisitando. Aqui vemos o app que foi im-
//portado do arquivo app executando essa requisições.

import app from "./app";

const port = process.env.APP_PORT;

app.listen(port, () => {});
