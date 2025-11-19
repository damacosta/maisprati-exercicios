// Exercício 15 - Leia 10 números inteiros, guarde em um vetor e mostre os números pares e suas posições

const prompt = require('prompt-sync')({sigint: true});

const numeros = [];

for (let i = 0; i < 10; i++) {
numeros.push(parseInt(prompt(`Digite o ${i + 1}º número inteiro: `)));
}

console.log("Números pares e suas posições:");
numeros.forEach((num, index) => {
if (num % 2 === 0) {
console.log(`Número ${num} na posição ${index}`);
}
});
