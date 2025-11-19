// Exercício 31 - Ler um número inteiro A e uma matriz V[30][30]
// Contar quantos valores iguais a A existem e criar matriz X com valores diferentes de A

const prompt = require('prompt-sync')({sigint: true});

const linhas = 30;
const colunas = 30;
const V = [];

// Gerando a matriz V com números aleatórios entre 0 e 20
for (let i = 0; i < linhas; i++) {
V[i] = [];
for (let j = 0; j < colunas; j++) {
V[i][j] = Math.floor(Math.random() * 21);
}
}

const A = parseInt(prompt("Digite um número inteiro A: "));

// Contando valores iguais a A
let contadorA = 0;
const X = [];

for (let i = 0; i < linhas; i++) {
for (let j = 0; j < colunas; j++) {
if (V[i][j] === A) {
contadorA++;
} else {
X.push(V[i][j]);
}
}
}

console.log(`\nNúmero de ocorrências de ${A} na matriz V: ${contadorA}`);
console.log(`\nMatriz X (valores diferentes de ${A}):`);
console.log(X.join(" "));
