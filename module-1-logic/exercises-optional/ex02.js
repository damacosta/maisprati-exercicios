// Exercício 2 - Escreva um programa que pergunte a velocidade de um carro.
// Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que o usuário foi multado.
// Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

// Importando a biblioteca prompt-sync
const prompt = require('prompt-sync')({sigint: true});

// Pergunta ao usuário a velocidade do carro
const velocidade = parseFloat(prompt("Qual é a velocidade do carro em Km/h?"));
const velocidadePermitida = 80;
const valorMultaPorKm = 5;

if (velocidade > velocidadePermitida) {
const excesso = velocidade - velocidadePermitida;
const multa = excesso * valorMultaPorKm;
console.log(`Você foi multado! Excesso de ${excesso.toFixed(1)} Km/h.`);
console.log(`Valor da multa: R$ ${multa.toFixed(2)}`);
} else {
console.log("Velocidade dentro do limite. Boa viagem!");
}
