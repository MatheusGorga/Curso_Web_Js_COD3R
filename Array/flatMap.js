const escola = [{
    nome:'turma m1',
    alunos: [
        {nome: 'gustavo', nota: 8.1},
        {nome: 'Ana', nota: 9.3}
    ]
},{ 
    nome:'turma m2',
    alunos: [
        {nome: 'Rebeca', nota: 8.9},
        {nome: 'roberto', nota: 7.3}
    ]
}]

const getNotaAluno = alunos => alunos.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaAluno)

const nota1 = escola.map(getNotasDaTurma)
console.log(nota1)


console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ] ))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)