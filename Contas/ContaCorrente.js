import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta {

    constructor(cliente, agencia, numeroConta) {
        super(cliente, agencia, numeroConta, 0);
    }

    sacar(valor) {
        const taxa = 1.05;
        return this._sacar(valor, taxa);
    }
}    