const piloto = ['vettel', 'alonso', 'raikonen', 'hamilton','massa']
console.log(piloto)
piloto.pop() //massa quebrou o carro // .push => remove o ultimo elemento do array
console.log(piloto)
piloto.push('vestapen') // .push => adiciona item no array 
console.log(piloto)
piloto.shift() // .shift => remove o primeiro elemento da lista
console.log(piloto)
piloto.unshift('kimi') // .unshift => adiciona um elemento a primeira posição do array
console.log(piloto)

// splice pode adc ou remover elementos
piloto.splice(2,0, 'botas', 'massa') // adc
console.log(piloto)
piloto.splice(2,1) // removendo
console.log(piloto)

//slice retorna um novo array
const algunsPilotos = piloto.slice(2,5) // cria um novo array com parametros de inicio e fim// slice = parte do array 
console.log(algunsPilotos)


