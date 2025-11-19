// Exercício 3 - Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km.
// Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km
// e R$ 0.45 para viagens mais longas.

// Importando a biblioteca prompt-sync
const prompt = require('prompt-sync')({sigint: true});

// Pergunta ao usuário a distância da viagem
const distancia = parseFloat(prompt("Qual é a distância da viagem em Km?"));

let precoPassagem;

if (distancia <= 200) {
precoPassagem = distancia * 0.50;
} else {
precoPassagem = distancia * 0.45;
}

console.log(`O preço da passagem é R$ ${precoPassagem.toFixed(2)}`);
