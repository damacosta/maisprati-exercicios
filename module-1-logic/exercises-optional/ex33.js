// Exercício 33 - Matriz 3x3: multiplicar elementos da diagonal principal
// pela média dos elementos da diagonal secundária

const prompt = require('prompt-sync')({sigint: true});

const tamanho = 3;
const M = [];

// Lendo a matriz 3x3
for (let i = 0; i < tamanho; i++) {
M[i] = [];
for (let j = 0; j < tamanho; j++) {
M[i][j] = parseFloat(prompt(`Digite o elemento M[${i+1}][${j+1}]: `));
}
}

// Calculando a média da diagonal secundária
let somaDiagonalSec = 0;
for (let i = 0; i < tamanho; i++) {
somaDiagonalSec += M[i][tamanho - 1 - i];
}
const mediaDiagonalSec = somaDiagonalSec / tamanho;

// Multiplicando elementos da diagonal principal pela média da diagonal secundária
for (let i = 0; i < tamanho; i++) {
M[i][i] *= mediaDiagonalSec;
}

console.log("\nMatriz após multiplicar a diagonal principal pela média da diagonal secundária:");
M.forEach(linha => console.log(linha.join("\t")));
