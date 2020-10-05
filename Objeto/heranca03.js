const pai ={
    nome: 'pedro',
    corCabelo: 'preto'
}

const filho1 = Object.create(pai)
filho1.nome = 'ana'
filho1.corCabelo = 'castanho'
console.log(filho1)

const filho2 = Object.create(pai,{
    nome: {value:'bia', writable: false, enumerable:true}
})

console.log(filho2.nome)
filho2.nome = 'Bianca'
console.log(filho2.nome)
console.log(Object.keys(filho1))
console.log(Object.keys(filho2))

for(let key in filho2){
    filho2.hasOwnProperty(key)?
    console.log(key): console.log(`por herança ${key}`)
}
