//object,privateExtension

const produto = Object.preventExtensions({
    nome:"qualquer",
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensivel: ', Object.isExtensible(produto))

const produto2 = {
    nome:"qualquer",
    preco: 1.99,
    tag: 'promoção'
}

produto2.item = 'Serviço'
produto.item = 'Serviço'

delete produto.tag
delete produto2.tag

console.log(produto, produto2)

// objeto.seal = sela// impossibilita de excluir e adc elementos mas possivel de mexer nos existente 
const pessoa = {nome: 'Juliana', idade: 23 }
Object.seal(pessoa)

console.log('Seleado', Object.isSealed(pessoa))
pessoa.nome = 'fernanda'
console.log(pessoa)

//object.freeze = selado + valores constantes
const nome = {nome:'gloria'}
console.log(nome)
const o = Object.freeze(nome)
console.log(o)