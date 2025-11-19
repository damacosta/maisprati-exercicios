// Exercício 32 - Matriz 12x13: dividir cada linha pelo maior elemento em módulo

const linhas = 12;
const colunas = 13;
const M = [];

// Gerando a matriz M com números aleatórios entre -50 e 50
for (let i = 0; i < linhas; i++) {
M[i] = [];
for (let j = 0; j < colunas; j++) {
M[i][j] = Math.floor(Math.random() * 101) - 50; // -50 a 50
}
}

console.log("Matriz original:");
M.forEach(linha => console.log(linha.join("\t")));

// Criando matriz modificada
const Mmod = M.map(linha => {
const maiorModulo = Math.max(...linha.map(Math.abs));
return linha.map(valor => (valor / maiorModulo).toFixed(2));
});

console.log("\nMatriz modificada (cada linha dividida pelo maior elemento em módulo):");
Mmod.forEach(linha => console.log(linha.join("\t")));
