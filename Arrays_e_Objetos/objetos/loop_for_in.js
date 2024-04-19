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

// loop for .. in serve para interagir com  um objeto

for(prop in pessoa){
    console.log(prop)
    //console.log(pessoa.prop) -- undefined
    console.log(pessoa[prop])
    // 1 - "nome" - pessoa["nome"] == pessoa.nome
    // 2 - "sobrenome" - pessoa["sobrenome"] == pessoa.sobrenome
    // 3 - "endereco" - pessoa["endereco"] == pessoa.endereco
}