// estilin é uma ferrementa utilizada para organizar melhor
// apontando o melhor formato para o codigo. Esse arquivo
// faz uma configuração para essa ferramenta

import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,

];
