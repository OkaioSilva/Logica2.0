const numeros = [2, 5, 4, 66, [], 30, false, "kaio", true, 88, undefined, 9, "sim", 6, '10']

let somaN = 0;

for(let i = 0; i < numeros.length; i++){
    let n = numeros[i]
    if(n === Number(n)){
        somaN += n
    }
    
}
console.log(`A soma dos números é: ${somaN}`)