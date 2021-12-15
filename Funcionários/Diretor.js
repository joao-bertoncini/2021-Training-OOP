import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario {
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf);
        super.bonificacao = 2;
    }

}