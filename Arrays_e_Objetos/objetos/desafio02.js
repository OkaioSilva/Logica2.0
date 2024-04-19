const endereco = {
    rua: 'Rua das Tulias',
    num: 302
}
const pessoa = {
    nome: 'João',
    sobrenome: 'Fagundes',
    endereco
}

console.log(`${pessoa.nome} ${pessoa.sobrenome} mora na ${pessoa.endereco.rua + ' ' + pessoa.endereco.num}`)

