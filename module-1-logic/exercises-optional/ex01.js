// Exercício 1 - Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro.
// Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

// Importando a biblioteca prompt-sync
const prompt = require('prompt-sync')({sigint: true});

// Pergunta ao usuário a quantidade de cigarros por dia e anos fumando
const cigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dia?"));
const anosFumando = parseInt(prompt("Há quantos anos você fuma?"));

// Cada cigarro reduz 10 minutos de vida
const minutosPerdidosPorCigarro = 10;

// Calcula o total de cigarros fumados
const totalCigarros = cigarrosPorDia * anosFumando * 365;

// Calcula o total de minutos perdidos
const totalMinutosPerdidos = totalCigarros * minutosPerdidosPorCigarro;

// Converte minutos em dias (1 dia = 1440 minutos)
const totalDiasPerdidos = totalMinutosPerdidos / 1440;

console.log(`Você perdeu aproximadamente ${totalDiasPerdidos.toFixed(1)} dias de vida.`);
