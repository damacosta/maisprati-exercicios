// Exercício 14 - Leia 7 nomes de pessoas, guarde em um vetor e mostre na ordem inversa

const prompt = require('prompt-sync')({sigint: true});

const nomes = [];

for (let i = 0; i < 7; i++) {
nomes.push(prompt(`Digite o ${i + 1}º nome: `));
}

console.log("Nomes na ordem inversa:");
for (let i = nomes.length - 1; i >= 0; i--) {
console.log(nomes[i]);
}
