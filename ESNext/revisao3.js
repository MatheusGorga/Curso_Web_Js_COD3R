// ES8: Object.values / Object.entries

const obj = {a:1, b:2, c:3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// melorias na notação literal
const nome = 'carla'
const pessoa = {
    nome,
    ola(){
        return 'ola'
    }
}
console.log(pessoa.nome, pessoa.ola())

//classe
class animal{}
class cachorro extends animal {
    falar(){
        return 'au au'
    }
}

console.log(new cachorro().falar())