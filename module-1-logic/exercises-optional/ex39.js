// Exercício 39 - Compactar vetor A[100], retirando valores nulos e negativos
// Resultado armazenado no vetor B

const prompt = require('prompt-sync')({sigint: true});

const tamanho = 100;
const A = [];
const B = [];

// Lendo os 100 elementos
for (let i = 0; i < tamanho; i++) {
A.push(parseFloat(prompt(`Digite o elemento ${i + 1} de A: `)));
}

// Compactando o vetor
for (let i = 0; i < tamanho; i++) {
if (A[i] > 0) {
B.push(A[i]);
}
}

console.log("\nVetor A:");
console.log(A.join(" "));

console.log("\nVetor B (valores positivos não nulos):");
console.log(B.join(" "));
