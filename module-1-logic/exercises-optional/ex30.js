// Exercício 30 - Matriz 5x5: criar vetores com a soma das linhas (SL) e das colunas (SC)

const linhas = 5;
const colunas = 5;
const M = [];

// Gerando a matriz M com números aleatórios entre 1 e 20
for (let i = 0; i < linhas; i++) {
M[i] = [];
for (let j = 0; j < colunas; j++) {
M[i][j] = Math.floor(Math.random() * 20) + 1;
}
}

// Vetores de somas
const SL = []; // soma das linhas
const SC = new Array(colunas).fill(0); // soma das colunas

for (let i = 0; i < linhas; i++) {
let somaLinha = 0;
for (let j = 0; j < colunas; j++) {
somaLinha += M[i][j];
SC[j] += M[i][j];
}
SL.push(somaLinha);
}

console.log("Matriz M:");
M.forEach(linha => console.log(linha.join(" ")));

console.log("\nVetor SL (soma das linhas):");
console.log(SL.join(" "));

console.log("\nVetor SC (soma das colunas):");
console.log(SC.join(" "));
