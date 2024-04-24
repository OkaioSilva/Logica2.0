function anobissexto(n) {
    return n % 4 === 0 && (n % 100 !== 0 || n % 400 === 0) 
}

console.log(anobissexto(2000))
console.log(anobissexto(1800))