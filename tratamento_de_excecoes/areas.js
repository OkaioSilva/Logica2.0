function calculaAreaDoRetangulo(l, h){
    // A = l * h
    if(typeof l !== 'number' || typeof h !== 'number'){
        throw new Error('calculaAreaDoRetangulo aceita dois paramêtros do tipo número');
    }
    return l * h
}
function calculaAreaDoTriangulo(b, h){
    // A = l * h
    if(typeof b !== 'number' || typeof h !== 'number'){
        throw new Error('calculaAreaDoRetangulo aceita dois paramêtros do tipo número');
    }
    return (b*h)/ 2
}
function calculaAreaDoCirculo(r){
    // A = pi * r²
    if(typeof r !== 'number'){
        throw new Error('calculaAreaDoRetangulo aceita dois paramêtros do tipo número');
    }
    let pi = Math.PI.toFixed(2)
    return pi * (r**2)
}