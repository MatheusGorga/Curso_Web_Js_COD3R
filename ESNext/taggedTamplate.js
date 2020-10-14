//tagged tamplate - processa o tamplate string em uma função

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'mat'
const situacao = 'aprovado'
console.log(tag`${aluno} esta ${situacao}`)

