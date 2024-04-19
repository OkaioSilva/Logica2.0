const carro = {
    modelo: 'Uno',
    ano: 2023,
    Km: 10000,
    combustivel: 'Gasolina',
    litrosConsumidos: 625
};
let kmPorL = carro.Km / carro.litrosConsumidos;
console.log(`O carro ${carro.modelo} ${carro.ano}, fez em média ${kmPorL} Km/L de gasolina`)