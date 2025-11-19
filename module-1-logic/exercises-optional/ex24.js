// Exercício 24 - Para uma matriz M[6][8], criar um vetor C com a quantidade de elementos negativos por linha

const M = [];
const linhas = 6;
const colunas = 8;

// Gerando a matriz M com números aleatórios entre -10 e 10
for (let i = 0; i < linhas; i++) {
M[i] = [];
for (let j = 0; j < colunas; j++) {
M[i][j] = Math.floor(Math.random() * 21) - 10; // valores de -10 a 10
}
}

console.log("Matriz M:");
M.forEach(linha => console.log(linha.join(" ")));

const C = M.map(linha => linha.filter(valor => valor < 0).length);

console.log("\nVetor C (quantidade de elementos negativos por linha):");
console.log(C.join(" "));
