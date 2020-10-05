class avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class pai extends avo{
    constructor(sobrenome, profissao = 'professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends pai {
    constructor(idade){
        super('silva')
        this.idade = idade
    }
}

const filho = new Filho(18)
console.log(filho)