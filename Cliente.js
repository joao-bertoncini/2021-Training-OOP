export class Cliente {

    #cpf;
    #nome;
    #senha;

    get cpf() {
        return this.#cpf;
    }

    constructor(nome, cpf, senha) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#senha = senha;
    }
    
    autenticar(senha) {
        return senha == this.#senha;
    }
}