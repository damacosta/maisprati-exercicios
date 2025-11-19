// Exercício 28 - Matriz 10x10: soma dos elementos acima e abaixo da diagonal principal

const linhas = 10;
const colunas = 10;
const M = [];

// Gerando a matriz M com números aleatórios entre 1 e 20
for (let i = 0; i < linhas; i++) {
M[i] = [];
for (let j = 0; j < colunas; j++) {
M[i][j] = Math.floor(Math.random() * 20) + 1;
}
}

let somaAcima = 0;
let somaAbaixo = 0;

for (let i = 0; i < linhas; i++) {
for (let j = 0; j < colunas; j++) {
if (j > i) {
somaAcima += M[i][j];
} else if (j < i) {
somaAbaixo += M[i][j];
}
}
}

console.log("Matriz M:");
M.forEach(linha => console.log(linha.join(" ")));

console.log(`\nSoma dos elementos acima da diagonal principal: ${somaAcima}`);
console.log(`Soma dos elementos abaixo da diagonal principal: ${somaAbaixo}`);
