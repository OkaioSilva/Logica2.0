const carro = {marca: 'Fiat',
    modelo: 'Uno',
    ano: 2023,
    Km: 10000,
    combustivel: 'Gasolina',
    litrosConsumidos: 625
};

console.log(`O carro ${carro.marca} ${carro.modelo} ${carro.ano}, fez, em média, ${(carro.Km / carro.litrosConsumidos)} Km/L de ${carro.combustivel}`)