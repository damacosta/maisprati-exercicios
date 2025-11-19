// Exercício 11 - Programa que lê o primeiro termo e a razão de uma PA (Progressão Aritmética)
// e mostra os 10 primeiros elementos e a soma da sequência.

const prompt = require('prompt-sync')({sigint: true});

const primeiroTermo = parseFloat(prompt("Digite o primeiro termo da PA: "));
const razao = parseFloat(prompt("Digite a razão da PA: "));

let pa = [];
let soma = 0;

for (let i = 0; i < 10; i++) {
const termo = primeiroTermo + i * razao;
pa.push(termo);
soma += termo;
}

console.log(`Os 10 primeiros termos da PA são: ${pa.join(", ")}`);
console.log(`A soma dos termos é: ${soma}`);
