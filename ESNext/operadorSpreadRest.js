// oprador ...rest(juntar)/ spread(espalhar)
//usar rest com parametro de função 

//usar spread com objeto
const funcionario = {
    nome:'maria',
    salario:1234.66
}
const clone = {ativo: true, ...funcionario}
console.log(funcionario, clone)

//usar spread p array
const grupoA = ['joao','pedro', 'gloria']
const gurpoFinal = [ 'maria', 'rafael', ...grupoA]
console.log(grupoA, gurpoFinal)