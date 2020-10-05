const carrinho = [
    '{ "nome": "Borracha", "preço": 3.45}',
    '{ "nome": "caderno", "preço": 13.90}',
    '{ "nome": "Kit Lapis", "preço": 41.22}', 
    '{ "nome": "Caneta", "preço": 7.50}'
]

//retornar um array apenas com os precos 

const paraObj = json => JSON.parse(json)
const  apenasPreco = produto => produto.preço

const resultado = carrinho.map(paraObj).map(apenasPreco)
console.log(resultado)