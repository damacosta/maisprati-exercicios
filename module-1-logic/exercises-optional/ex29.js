// Exercício 29 - Matriz 5x5: calcular somas específicas
// a) soma da linha 4
// b) soma da coluna 2
// c) soma da diagonal principal
// d) soma de todos os elementos

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

let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonal = 0;
let somaTotal = 0;

for (let i = 0; i < linhas; i++) {
for (let j = 0; j < colunas; j++) {
const valor = M[i][j];
somaTotal += valor;

```
    if (i === 3) somaLinha4 += valor; // linha 4 (índice 3)
    if (j === 1) somaColuna2 += valor; // coluna 2 (índice 1)
    if (i === j) somaDiagonal += valor; // diagonal principal
}
```

}

console.log("Matriz M:");
M.forEach(linha => console.log(linha.join(" ")));

console.log(`\nSoma da linha 4: ${somaLinha4}`);
console.log(`Soma da coluna 2: ${somaColuna2}`);
console.log(`Soma da diagonal principal: ${somaDiagonal}`);
console.log(`Soma de todos os elementos: ${somaTotal}`);
