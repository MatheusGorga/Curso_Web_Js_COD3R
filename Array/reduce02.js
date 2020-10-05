const alunos = [

    {nome: 'joao', nota:7.3 ,bolsista: false},
    {nome: 'maria', nota:9.2 ,bolsista: true},
    {nome: 'pedro', nota:9.8 ,bolsista: false},
    {nome: 'ana', nota:8.7 ,bolsista: true}
]

//D1: todos os alunos são bolsistas? 
const tdsBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(tdsBolsistas))


//D2: algum dos alunos são bolsistas? 
const agmBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(agmBolsistas))

