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