// não aceita repetição e nao é indexado

const { time } = require("console")

const times = new Set()
times.add('Vasco')
times.add('Sao paulo')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
times.delete('Flamengo')
console.log(times)

const nomes = ['raquel', 'lucas', 'julia', 'lucas']
const nomeSet = new Set(nomes)
console.log(nomeSet)
