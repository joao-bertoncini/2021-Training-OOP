// Classe Abstrata
export class Conta{

    #saldo;
    #cliente;
    #agencia;
    #numeroConta;
    static numeroDeContas = 0;

    constructor(cliente, agencia, numeroConta, saldo) {
        this.#saldo = saldo;
        this.#cliente = cliente;
        this.#agencia = agencia;
        this.#numeroConta = numeroConta;
        Conta.numeroDeContas++;
        if(this.constructor == Conta) {
            throw new Error(`Não é possível instanciar um objeto Conta Diretamente`);
        }
    }

    set numeroConta(valor) {
        if(valor < 0) {
            return `O número da conta não pode ser um valor negativo`;
        }
        this.#numeroConta = valor;
    }

    get numeroConta() {
        return this.#numeroConta;
    }

    set agencia (valor) {
        if(valor < 0) {
            return `O número da agência não pode ser um valor negativo`;
        }
        this.#agencia = valor;
    }

    get agencia() {
        return this.#agencia;
    }

    set cliente(valor) {
        if(valor instanceof Cliente){
            this.#cliente = valor;
        }
    }

    get cliente() {
        return this.#cliente;
    }

    _sacar(valor, taxa) {
        if(this.#saldo < valor){
            console.log(`Não foi possível realizar o saque, valor de saldo insuficiente`)
            return;
        } 
            this.#saldo -= valor * taxa;
            console.log(`Realizado saque no valor de R$${valor} da conta ${this.numeroConta}, do(a) ${this.#cliente.nome}`);
            console.log(`Seu novo saldo é R$${this.#saldo}\n`);
    }

    // Método Abstrato
    sacar(valor, taxa) {
        throw new Error(`O Método sacar da Conta é abstrato`);
    }
        

    depositar(valor){
        if(valor < 0) {
            console.log(`Não é possível depositar esse valor`);
            return;
        } 
            this.#saldo += valor;
            console.log(`Realizado depósito no valor de R$${valor}, da conta ${this.numeroConta}, do(a) ${this.#cliente.nome}\n`);
    }
    
    transferir(valor, conta){
        if(this.#saldo < valor || conta == ``) {
            return;
        }
        this.sacar(valor);
        conta.depositar(valor);
    }

    get saldo() {
        return `Saldo da conta ${this.numeroConta}, do(a) ${this.#cliente.nome}, é de: R$${this.#saldo}\n`;
    }
}