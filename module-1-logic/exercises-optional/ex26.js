// Exercício 26 - Dadas duas matrizes A[3][5] e B[3][5], calcular a matriz produto P[3][5]
// Como as dimensões são iguais, consideramos o produto elemento a elemento

const linhas = 3;
const colunas = 5;

const A = [];
const B = [];
const P = [];

// Gerando as matrizes A e B com números aleatórios de 0 a 10
for (let i = 0; i < linhas; i++) {
A[i] = [];
B[i] = [];
P[i] = [];
for (let j = 0; j < colunas; j++) {
A[i][j] = Math.floor(Math.random() * 11);
B[i][j] = Math.floor(Math.random() * 11);
P[i][j] = A[i][j] * B[i][j]; // produto elemento a elemento
}
}

console.log("Matriz A:");
A.forEach(linha => console.log(linha.join(" ")));

console.log("\nMatriz B:");
B.forEach(linha => console.log(linha.join(" ")));

console.log("\nMatriz P (produto elemento a elemento):");
P.forEach(linha => console.log(linha.join(" ")));
