function meuObjeto(){
    console.log(meuObjeto.prototype )
}

const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjeto.prototype=== obj2.__proto__)

meuObjeto.prototype.nome = 'Anonimo'
meuObjeto.prototype.falar = function(){
    console.log(`meu nome é  ${this.nome}`)
}

obj1.falar()
obj1.nome = 'guga'
obj1.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()

//resumindo a loucura....
console.log((new Object).__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)

