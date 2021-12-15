/*
Ser autenticável é ter o método " autenticar"
Ducky Type
*/

export class SistemaDeAutenticacao {
    static login(autenticavel, senha) {
        if(SistemaDeAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return`autenticar` in autenticavel && autenticavel.autenticar instanceof Function;   
    }

    // static login(autenticavel, senha) {
    //     if(`autenticar` in autenticavel && autenticavel.autenticar instanceof Function) {
    //         return autenticavel.autenticar(senha);
    //     }
    //     return false;
    // }
}