// Exercício 8 - Programa de vida saudável que converte horas de atividade física em pontos e dinheiro.
// Regras:
// - Até 10 h de atividade: 2 pontos por hora
// - De 10 h até 20 h: 5 pontos por hora
// - Acima de 20 h: 10 pontos por hora
// - Cada ponto vale R$ 0,05

const prompt = require('prompt-sync')({sigint: true});

const horasAtividade = parseFloat(prompt("Quantas horas de atividade física você teve no mês? "));
let pontos;

if (horasAtividade <= 10) {
pontos = horasAtividade * 2;
} else if (horasAtividade <= 20) {
pontos = horasAtividade * 5;
} else {
pontos = horasAtividade * 10;
}

const dinheiro = pontos * 0.05;

console.log(`Você ganhou ${pontos.toFixed(1)} pontos.`);
console.log(`Você faturou R$ ${dinheiro.toFixed(2)}.`);
