import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {

    constructor(cliente, agencia, numeroConta) {
        super(cliente, agencia, numeroConta, 0);
    }

    sacar(valor) {
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}