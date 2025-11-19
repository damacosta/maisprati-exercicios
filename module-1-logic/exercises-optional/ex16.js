// Exercício 16 - Preencha um vetor de 20 posições com números aleatórios (0 a 99),
// mostre os números gerados e depois coloque o vetor em ordem crescente.

const numeros = [];

// Preenchendo o vetor com números aleatórios
for (let i = 0; i < 20; i++) {
numeros.push(Math.floor(Math.random() * 100));
}

console.log("Números gerados:");
console.log(numeros.join(", "));

// Ordenando o vetor em ordem crescente
numeros.sort((a, b) => a - b);

console.log("Números em ordem crescente:");
console.log(numeros.join(", "));
