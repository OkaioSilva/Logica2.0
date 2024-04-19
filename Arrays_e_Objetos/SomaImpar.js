const numeros = [2, 5, 4, 66, 25, 30, 4, 77, 91, 88, 42, 9, 13, 6, 10]
let soma = 0;
for(let i = 0; i < numeros.length; i++){
    let n = numeros[i]
    if(n % 2 !== 0){
        soma+= n
    }
}
console.log(soma)