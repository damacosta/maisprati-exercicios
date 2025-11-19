// Exercício 38 - Vetor de 6 elementos: realizar operação conforme opção do usuário

const prompt = require('prompt-sync')({sigint: true});

const tamanho = 6;
const vetor = [];

// Lendo os 6 elementos
console.log("Digite 6 números:");
for (let i = 0; i < tamanho; i++) {
vetor.push(parseFloat(prompt(`Elemento ${i + 1}: `)));
}

// Lendo a opção do usuário
console.log("\nEscolha a operação:");
console.log("1 - Soma dos elementos");
console.log("2 - Produto dos elementos");
console.log("3 - Média dos elementos");
console.log("4 - Ordenar em ordem crescente");
console.log("5 - Mostrar o vetor");
const opcao = parseInt(prompt("Digite a opção desejada: "));

switch (opcao) {
case 1:
const soma = vetor.reduce((acc, val) => acc + val, 0);
console.log(`Soma dos elementos: ${soma}`);
break;
case 2:
const produto = vetor.reduce((acc, val) => acc * val, 1);
console.log(`Produto dos elementos: ${produto}`);
break;
case 3:
const media = vetor.reduce((acc, val) => acc + val, 0) / tamanho;
console.log(`Média dos elementos: ${media.toFixed(2)}`);
break;
case 4:
const ordenado = [...vetor].sort((a,b) => a - b);
console.log(`Vetor em ordem crescente: ${ordenado.join(" ")}`);
break;
case 5:
console.log(`Vetor: ${vetor.join(" ")}`);
break;
default:
console.log("Opção inválida.");
}
