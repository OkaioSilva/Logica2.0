function somar(a, b){ 
    return a + b
}

let result = somar(2, 8)
console.log(result)

// executar a conta dependendo do simbolo passado

function calcular(a, b, simbolo){
    switch(simbolo){
        case '+':
        return a + b
        break;
        case '-':
        return a - b
        break;
        case 'x':
        return a * b
        break;
        case '/':
        return a / b
        break;
        default:
            return null
    }
}

console.log(calcular(2,5, '+'))
console.log(calcular(10,5, '-'))
console.log(calcular(7,8, 'x'))
console.log(calcular(48,2, '/'))