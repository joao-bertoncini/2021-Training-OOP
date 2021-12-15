import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionários/Gerente.js";
import { Diretor } from "./Funcionários/Diretor.js";
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";

const diretor = new Diretor(`Rodrigo`, 10000, 11122233309);
diretor.cadastrarSenha(`123456`);
const gerente = new Gerente(`Fabrício`, 5000, 99988877709);
gerente.cadastrarSenha(`123`);
const cliente = new Cliente(`Beatriz`, 44455566609, `456`);

const diretorEstaLogado = SistemaDeAutenticacao.login(diretor, `123456`);
const gerenteEstaLogado = SistemaDeAutenticacao.login(gerente, `123`);
const clienteEstaLogado = SistemaDeAutenticacao.login(cliente, `456`);

console.log(diretorEstaLogado, gerenteEstaLogado);
console.log(clienteEstaLogado);





