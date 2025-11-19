// Exercício 27 - Ler uma matriz M[6][6] e um valor A
// Multiplicar cada elemento de M por A e armazenar no vetor V[36]

const prompt = require('prompt-sync')({sigint: true});

const linhas = 6;
const colunas = 6;
const M = [];

// Gerando a matriz M com números aleatórios entre 1 e 10
for (let i = 0; i < linhas; i++) {
M[i] = [];
for (let j = 0; j < colunas; j++) {
M[i][j] = Math.floor(Math.random() * 10) + 1;
}
}

const A = parseFloat(prompt("Digite o valor de A: "));

const V = [];
for (let i = 0; i < linhas; i++) {
for (let j = 0; j < colunas; j++) {
V.push(M[i][j] * A);
}
}

console.log("Matriz M:");
M.forEach(linha => console.log(linha.join(" ")));

console.log(`\nVetor V (M multiplicada por ${A}):`);
console.log(V.join(" "));
