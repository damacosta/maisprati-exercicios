// Exercício 34 - Matriz 50x50: multiplicar cada linha pelo elemento da diagonal principal

const linhas = 50;
const colunas = 50;
const M = [];

// Gerando a matriz M com números aleatórios entre 1 e 10
for (let i = 0; i < linhas; i++) {
M[i] = [];
for (let j = 0; j < colunas; j++) {
M[i][j] = parseFloat((Math.random() * 10).toFixed(2));
}
}

console.log("Matriz original (apenas primeiras 5 linhas para visualização):");
M.slice(0,5).forEach(linha => console.log(linha.join("\t")));

// Multiplicando cada linha pelo elemento da diagonal principal
const Mmod = M.map((linha, i) => {
const fator = linha[i];
return linha.map(valor => (valor * fator).toFixed(2));
});

console.log("\nMatriz modificada (apenas primeiras 5 linhas para visualização):");
Mmod.slice(0,5).forEach(linha => console.log(linha.join("\t")));
