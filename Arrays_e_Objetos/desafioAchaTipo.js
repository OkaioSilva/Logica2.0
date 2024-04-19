/* 
    Dado um array qualquer, mostrar no console ou em um alert um "boolean" indicando se encontrou um dos seguintes valores nesse array: null, undefined ou NaN
*/

const numeros = [2, 5, 4, 66, [], 30, false, "kaio", true, 88, undefined, 9, "sim", 6, '10']

let Encontrou = false;

for(let i = 0; i < numeros.length; i++){
    let n = numeros[i]
    if(n == null || n == undefined || isNaN(n)){
        Encontrou = true
        break;
    } 
}
console.log("Encontrou null, undefined ou NaN? " + Encontrou) 
/* console.log(`A soma dos números é: ${somaN}`) */