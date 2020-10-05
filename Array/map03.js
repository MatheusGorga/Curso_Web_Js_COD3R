Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++ ){
        newArray.push(callback(this[i], i ,this))
        
    }
    return newArray
}


const carrinho = [
    '{ "nome": "Borracha", "preço": 3.45}',
    '{ "nome": "caderno", "preço": 13.90}',
    '{ "nome": "Kit Lapis", "preço": 41.22}', 
    '{ "nome": "Caneta", "preço": 7.50}'
]

//retornar um array apenas com os precos 

const paraObj = json => JSON.parse(json)
const  apenasPreco = produto => produto.preço

const resultado = carrinho.map2(paraObj).map2(apenasPreco)
console.log(resultado)

