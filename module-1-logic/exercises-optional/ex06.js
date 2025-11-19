// Exercício 6 - Crie um jogo onde o computador vai sortear um número entre 1 e 5.
// O jogador vai tentar descobrir qual foi o valor sorteado.

const prompt = require('prompt-sync')({sigint: true});

// Computador escolhe um número aleatório entre 1 e 5
const numeroComputador = Math.floor(Math.random() * 5) + 1;

// Jogador tenta adivinhar
const numeroJogador = parseInt(prompt("Tente adivinhar o número (entre 1 e 5): "));

console.log(`O número sorteado pelo computador foi: ${numeroComputador}`);

if (numeroJogador === numeroComputador) {
console.log("Parabéns! Você acertou!");
} else {
console.log("Você errou. Tente novamente!");
}
