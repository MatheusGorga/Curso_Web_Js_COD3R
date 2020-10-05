//array é um OBJ mas funciona com indices

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('bia', 'carlos', 'ana')
console.log(aprovados)

aprovados = [ 'bia', 'carlos', 'ana' ]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'paulo'
// push = aumenta o numero de itens no array 
aprovados.push('Jose')
console.log(aprovados.length)
console.log(aprovados)
// sort = item que mistura ou reorganiza o array
aprovados.sort()
console.log(aprovados)
// delete = -itens
delete aprovados[0]
console.log(aprovados)


aprovados = [ 'bia', 'carlos', 'ana' ]
aprovados.splice(1,1)
console.log(aprovados)
aprovados.splice(2, 0,'elemento1', 'elemento2')
console.log(aprovados)



