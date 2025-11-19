// Exercício 25 - Ler uma matriz 15x20 de números reais e mostrar a soma de cada coluna

const linhas = 15;
const colunas = 20;
const M = [];

// Gerando a matriz com números aleatórios entre 0 e 100 (podem ser reais)
for (let i = 0; i < linhas; i++) {
M[i] = [];
for (let j = 0; j < colunas; j++) {
M[i][j] = parseFloat((Math.random() * 100).toFixed(2));
}
}

// Imprimindo a matriz
console.log("Matriz 15x20:");
M.forEach(linha => console.log(linha.join(" ")));

// Calculando a soma de cada coluna
const somaColunas = [];
for (let j = 0; j < colunas; j++) {
let soma = 0;
for (let i = 0; i < linhas; i++) {
soma += M[i][j];
}
somaColunas[j] = soma.toFixed(2);
}

console.log("\nSoma de cada coluna:");
console.log(somaColunas.join(" "));
