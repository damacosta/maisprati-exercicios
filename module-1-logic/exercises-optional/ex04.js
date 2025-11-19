// Exercício 4 - Crie um programa que leia o tamanho de três segmentos de reta.
// Analise seus comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo,
// o comprimento de cada lado deve ser menor que a soma dos outros dois.

const prompt = require('prompt-sync')({sigint: true});

const lado1 = parseFloat(prompt("Digite o comprimento do primeiro segmento: "));
const lado2 = parseFloat(prompt("Digite o comprimento do segundo segmento: "));
const lado3 = parseFloat(prompt("Digite o comprimento do terceiro segmento: "));

if (
lado1 < lado2 + lado3 &&
lado2 < lado1 + lado3 &&
lado3 < lado1 + lado2
) {
console.log("É possível formar um triângulo com esses segmentos.");
} else {
console.log("Não é possível formar um triângulo com esses segmentos.");
}
