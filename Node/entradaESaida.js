const { identity } = require("lodash")

const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anonimo!\n')
    process.exit()

}else{
    process.stdout.write('informe o nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\r\n','')

        process.stdout.write(`Fala menino ${nome}!!\n`)
        process.exit()
    })
}