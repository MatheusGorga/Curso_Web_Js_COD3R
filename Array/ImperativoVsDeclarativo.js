const alunos = [
    {nome: 'joao', nota: 7.3 },
    {nome: 'maria', nota: 9.2}
]

//imperativo 
let total1 = 0 
 for( let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
 }
console.log(total1 / alunos.length)

// declarativo

const getNota = alunos => alunos.nota
const soma = (total, alunos) => total + alunos
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

