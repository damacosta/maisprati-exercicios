// Exercício 23 - Criar e imprimir a matriz identidade 7x7
// Diagonal principal = 1, demais elementos = 0

const MI = [];
const tamanho = 7;

for (let i = 0; i < tamanho; i++) {
MI[i] = [];
for (let j = 0; j < tamanho; j++) {
MI[i][j] = (i === j) ? 1 : 0;
}
}

// Imprimindo a matriz identidade
console.log("Matriz Identidade 7x7:");
for (let i = 0; i < tamanho; i++) {
console.log(MI[i].join(" "));
}
