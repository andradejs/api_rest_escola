"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//Server é um arquivo no qual é executado o comando para
//escutar uma determinda porta e checar o serviço que o
//cliente está requisitando. Aqui vemos o app que foi im-
//portado do arquivo app executando essa requisições.

var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = process.env.APP_PORT;

_app2.default.listen(port, () => {});
